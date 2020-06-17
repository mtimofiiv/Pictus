import React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import Footer from "./footer"

const Layout = ({ children, header, footer }) => {
  return (
    <>
      <div className="container">
        <Header logo={header}/>
        <main>{children}</main>
        <Footer logo={footer}/>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
