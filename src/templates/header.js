import React from "react"

const Header = ({ logo }) => {

  return (
    <div className="navbar-container">
      <div className="logo-container">
        <img
          className="navbar-logo"
          height={50}
          src={logo.frontmatter.image}
          alt={logo.frontmatter.id}/>
      </div>
      <div className="flex-spacer"/>
      <div className="navbar-options">
        <div className="navbar-option">Pricing</div>
        <div className="navbar-option">Team</div>
        <div className="navbar-option">Contact</div>
      </div>
      <div className="navbar-actions">
        <div className="navbar-action action-btn">Request a Demo</div>
      </div>
    </div>
  )
}

export default Header;
