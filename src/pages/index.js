import React from "react"
import { graphql } from "gatsby"
import Feature from "../templates/feature"

const IndexPage = ({
  data
}) => {
  console.log(data)
  const { allMarkdownRemark: markDown } = data
  console.log(markDown.edges)
  const Features = markDown.edges
    .map(edge => <Feature key={edge.title} feature={edge} />)

  return <div>{Features}</div>
}

export default IndexPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark {
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
