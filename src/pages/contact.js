import React from "react"
import { graphql } from "gatsby"
import Layout from '../templates/layout'
import SEO from '../templates/seo'

const ContactPage = ({
  data
}) => {
  const { header, footer, contactBlock } = data

  return (
    <Layout header={header} footer={footer}>
      <SEO
        title="Contact"
        canonical="/"
        description="Contact the PICTUS team or book a demo by filling out the form below."
        keywords="recycling, contact, recycle, demo, PICTUS"
      />

      <div className="secondary-intro-block">
        <div className="secondary-intro-text">
          <h2 className="secondary-intro-header">{contactBlock.frontmatter.title}</h2>
          <div className="secondary-intro-subtext">
            {contactBlock.frontmatter.subtext}
          </div>
        </div>
      </div>

      <form method="post" action="https://formspree.io/joe.czepil@getsmartsolutions.ca">
        <input type="hidden" name="bot-field" />
        <label>
          Name
          <input type="text" name="name" id="name" />
        </label>
        <label>
          Email
          <input type="email" name="_replyto" id="email" />
        </label>
        <label>
          Subject
          <input type="text" name="subject" id="subject" />
        </label>
        <label>
          Message
          <textarea name="message" id="message" rows="5" />
        </label>
        <button type="submit" className="action-btn">Send</button>
      </form>

    </Layout>
  )
}

export default ContactPage

export const pageQuery = graphql`
  query {
    contactBlock: markdownRemark(frontmatter: {id: {eq: "ContactBlock"}}) {
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
