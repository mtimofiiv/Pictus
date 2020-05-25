import React from "react"
// import Img from "gatsby-image"
import { graphql } from "gatsby"

const Header = (props) => {
  console.log(props)
  return (
    <div className="navbar-container">
      <div className="logo-container">
      </div>
      <div className="navbar-options">
        <div className="navbar-option">Features</div>
        <div className="navbar-option">Pricing</div>
        <div className="navbar-option">Team</div>
        <div className="navbar-option">Contact</div>
      </div>
      <div className="flex-spacer"/>
      <div className="navbar-actions">
        <div className="navbar-action">Demo</div>
      </div>
    </div>
  )
}

export default Header

export const query = graphql`
  query {
    logo: file(relativePath: { eq: "logo.png" }) {
      childImageSharp {
        fixed(width: 125, height: 125) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
