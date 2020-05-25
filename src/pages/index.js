import React from "react"
import { graphql } from "gatsby"
import Feature from "../templates/feature"
import Header from '../templates/header'
import Layout from '../templates/layout'
import Attribute from "../templates/attribute"
import Testimonial from "../templates/testimonial"

const IndexPage = ({
  data
}) => {
  const { features, mainBlock, attributes, testimonials } = data

  const Features = features.edges
    .map(edge => <Feature key={edge.node.frontmatter.title} feature={edge} />)
  const Attributes = attributes.edges
    .map(edge => <Attribute key={edge.node.frontmatter.title} attribute={edge} />)
  const Testimonials = testimonials.edges
    .map(edge => <Testimonial key={edge.node.frontmatter.title} testimonial={edge} />)

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

      <div className="section-header">
        A Wide Variety of Modules
        <div className="section-header-underline"/>
      </div>
      <div>{Features}</div>

      <div className="section-header">
        A Secure, Modular, Easy to Use Solution
        <div className="section-header-underline"/>
      </div>
      <div>{Attributes}</div>

      <div className="section-header">
        Companies that love us
        <div className="section-header-underline"/>
      </div>
      <div>{Testimonials}</div>
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
    attributes: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/(attributes)/.*.md$/"}}) {
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
    testimonials: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/(testimonials)/.*.md$/"}}) {
      edges {
        node {
          html
          frontmatter {
            person
            company
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
