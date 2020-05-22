import React from "react"
import { graphql } from "gatsby"
import Feature from "../templates/feature"

const IndexPage = ({
  data
}) => {
  const { allMarkdownRemark: markDown } = data

  const Features = markDown.edges
    .map(edge => <Feature key={edge.title} feature={edge} />)

  return <div>{Features}</div>
}

export default IndexPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/(features)/.*.md$/"}}) {
      edges {
        node {
          html
          frontmatter {
            title
            image
          }
        }
      }
    }
  }
`
