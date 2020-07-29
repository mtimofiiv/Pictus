import React from "react"
import { Link } from "gatsby"

const Header = ({ logo }) => {

  return (
    <div className="navbar-container">
      <Link to="/">
        <div className="logo-container">
          <img
            className="navbar-logo"
            height={50}
            src={logo.frontmatter.image}
            alt={logo.frontmatter.id}/>
        </div>
      </Link>
      <div className="flex-spacer"/>
      <div className="navbar-options">
        <Link className="navbar-option" to="/pricing">Pricing</Link>
        <Link className="navbar-option" to="/team">Team</Link>
        <Link className="navbar-option" to="/contact">Contact</Link>
      </div>
      <div className="navbar-actions">
        <div className="navbar-action action-btn">Request a Demo</div>
      </div>
    </div>
  )
}

export default Header;
