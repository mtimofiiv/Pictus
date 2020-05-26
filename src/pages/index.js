import React from "react"
import { graphql } from "gatsby"
import Feature from "../templates/feature"
import Layout from '../templates/layout'
import Attribute from "../templates/attribute"
import Testimonial from "../templates/testimonial"
import Fade from 'react-reveal/Fade';

const IndexPage = ({
  data
}) => {
  const { features, mainBlock, attributes, testimonials, header } = data

  const Features = features.edges
    .map((edge, index) => <Feature key={edge.node.frontmatter.title} feature={edge} even={index%2 === 0} />)
  const Attributes = attributes.edges
    .map(edge => <Attribute key={edge.node.frontmatter.title} attribute={edge} />)
  const Testimonials = testimonials.edges
    .map(edge => <Testimonial key={edge.node.frontmatter.company} testimonial={edge} />)

  return (
    <Layout header={header}>
      <div className="intro-block">
        <div className="intro-text">
          <h2 className="intro-header">{mainBlock.frontmatter.title}</h2>
          <div className="intro-subtext">{mainBlock.frontmatter.subtext}</div>
        </div>
        <div className="small-line"/>
      </div>

      <h2 className="section-header">
        Tools for your Whole Process
        <div className="section-header-underline"/>
      </h2>
      <div>{Features}</div>

      <h2 className="section-header">
        What Makes us Different?
        <div className="section-header-underline"/>
      </h2>
      <Fade>
        <div>{Attributes}</div>
      </Fade>

      <h2 className="section-header">
        Users that Love us
        <div className="section-header-underline"/>
      </h2>
      <Fade>
        <div>{Testimonials}</div>
      </Fade>
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
    },
    header: markdownRemark(frontmatter: {id: {eq: "Logo"}}) {
      frontmatter {
        id
        image
      }
      html
    }
  }
`
