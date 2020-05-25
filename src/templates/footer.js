import React from "react"
import { graphql } from "gatsby"

const Footer = (props) => {
  return (
    <div className="footer-container">
      <div className="container">
        <div className="flex-spacer"/>
        <div className="footer-options">
          <div className="footer-header">Pages</div>
          <div className="footer-option">Features</div>
          <div className="footer-option">Pricing</div>
          <div className="footer-option">Team</div>
          <div className="footer-option">Contact</div>
        </div>
        <div className="footer-options">
          <div className="footer-header">Contact</div>
          <div className="footer-option">203 - 803 Shamrock St.</div>
          <div className="footer-option">Victoria, BC V8X 2V1</div>
          <div className="footer-option">778.817.0720</div>
          <div className="footer-option">info@pictus.ca</div>
        </div>
      </div>
    </div>
  )
}

export default Footer
