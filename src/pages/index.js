import React from "react"
import { graphql } from "gatsby"
import Feature from "../templates/feature"
import Layout from '../templates/layout'
import Attribute from "../templates/attribute"
import Testimonial from "../templates/testimonial"
import Fade from 'react-reveal/Fade'
import DownArrow from '../templates/down-arrow'
import SEO from '../templates/seo'

const IndexPage = ({
  data
}) => {
  const { features, mainBlock, attributes, testimonials, header, footer } = data

  const Features = features.edges
    .map((edge, index) => <Feature key={edge.node.frontmatter.title} feature={edge} even={index%2 === 0} />)
  const Attributes = attributes.edges
    .map(edge => <Attribute key={edge.node.frontmatter.title} attribute={edge} />)
  const Testimonials = testimonials.edges
    .map((edge, index) => <Testimonial key={edge.node.frontmatter.company} testimonial={edge} />)

  return (
    <Layout header={header} footer={footer}>
      <SEO
        title="Empower your recycling stewardship"
        canonical="/"
        description="PICTUS empowers recycling stewardships and PROs to manage, monitor, and improve their recycling and incentive programs. Configure your application today and see the results tomorrow."
        keywords="recycling, claims, filing, compliance, PRO, recycle, mapping"
      />

      <div className="intro-block">
        <div className="intro-text">
          <h2 className="intro-header">{mainBlock.frontmatter.title}</h2>
        </div>
        <div className="sub-intro">
          <div className="intro-subtext">
            {mainBlock.frontmatter.subtext}
            <div className="action-btn">Request a Demo</div>
          </div>
          <img
            src={mainBlock.frontmatter.image}
            alt={mainBlock.frontmatter.title}/>
        </div>
        <DownArrow/>
      </div>

      <h2 className="section-header">
        Tools and features for your whole process.
      </h2>
      <div>{Features}</div>

      <h2 className="section-header">
        What makes us different?
      </h2>
      <Fade>
        <div>{Attributes}</div>
      </Fade>

      <h2 className="section-header">
        Our customers love us.
      </h2>
      {Testimonials}        
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
    },
    footer: markdownRemark(frontmatter: {id: {eq: "Footer"}}) {
      frontmatter {
        id
        image
      }
    }
  }
`
