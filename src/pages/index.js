import React from "react"
import { graphql } from "gatsby"
import Feature from "../templates/feature"
import Header from '../templates/header'
import Layout from '../templates/layout'

const IndexPage = ({
  data
}) => {
  const { features, mainBlock } = data

  const Features = features.edges
    .map(edge => <Feature key={edge.node.frontmatter.title} feature={edge} />)

  return (
    <Layout>
      <div className="intro-block">
        <div className="intro-text">
          <div className="intro-header">{mainBlock.frontmatter.title}</div>
          <div className="intro-subtext">{mainBlock.frontmatter.subtext}</div>
        </div>
        <div className="intro-image">

        </div>
      </div>
      <div>{Features}</div>
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query {
    features: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/(features)/.*.md$/"}}) {
      edges {
        node {
          html
          frontmatter {
            title
            image
          }
        }
      }
    },
    mainBlock: markdownRemark(frontmatter: {id: {eq: "MainBlock"}}) {
      frontmatter {
        id
        image
        subtext
        title
      }
      html
    }
  }
`
