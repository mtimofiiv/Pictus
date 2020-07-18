import React from "react"
import { graphql } from "gatsby"
import Layout from '../templates/layout'
import Member from "../templates/member"

const TeamPage = ({
  data
}) => {
  const { header, footer, teamBlock, members } = data

  members.edges.sort(function(a, b) {
    return a.node.frontmatter.order - b.node.frontmatter.order
  })
  const Members = members.edges
  .map((edge) => <Member key={edge.node.frontmatter.title} member={edge} />)

  return (
    <Layout header={header} footer={footer}>
      <div className="secondary-intro-block">
        <div className="secondary-intro-text">
          <h2 className="secondary-intro-header">{teamBlock.frontmatter.title}</h2>
          <div className="secondary-intro-subtext">
            {teamBlock.frontmatter.subtext}
          </div>
        </div>
      </div>

      <div>{Members}</div>
    </Layout>
  )
}

export default TeamPage

export const pageQuery = graphql`
  query {
    members: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/(members)/.*.md$/"}}) {
      edges {
        node {
          html
          frontmatter {
            title
            image
            name
            order
          }
        }
      }
    },
    teamBlock: markdownRemark(frontmatter: {id: {eq: "TeamBlock"}}) {
      frontmatter {
        id
        image
        subtext
        title
      }
    },
    header: markdownRemark(frontmatter: {id: {eq: "Logo"}}) {
      frontmatter {
        id
        image
      }
      html
    },
    footer: markdownRemark(frontmatter: {id: {eq: "Footer"}}) {
      frontmatter {
        id
        image
      }
    }
  }
`
