import React from "react"
import { Link } from "gatsby"

import Layout from "../templates/layout"

const Menu = ({ data }) => {
  const { header, footer } = data

  return (
    <Layout header={header} footer={footer}>
      <div className="header-right-page">
        <Link className="header-right-item" to="/">Home</Link>
        <Link className="header-right-item" to="/pricing/">Pricing</Link>
        <Link className="header-right-item" to="/team/">Team</Link>
        <Link className="header-right-item" to="/contact/">Contact</Link>
      </div>
    </Layout>
  )
}

export default Menu

export const pageQuery = graphql`
  query {
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
