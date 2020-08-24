import React from "react"
import { Link } from "gatsby"

const Footer = ({ logo }) => {
  return (
    <div className="footer-container">
      <div className="container">
        <img
          className="navbar-logo"
          height={50}
          src={logo.frontmatter.image}
          alt={logo.frontmatter.id}/>
        <div className="footer-options">
          <Link className="footer-option" to="/pricing">Pricing</Link>
          <Link className="footer-option" to="/team">Team</Link>
          <Link className="footer-option" to="/contact">Contact</Link>
          <Link className="footer-option" to="/contact">Request a Demo</Link>
        </div>
        <div className="footer-bottom">
          <div className="footer-line">203 - 803 Shamrock St. Victoria, BC V8X 2V1</div>
          <div className="footer-line">778.817.0720</div>
          <div className="footer-line">info@pictus.ca</div>
        </div>
      </div>
    </div>
  )
}

export default Footer
