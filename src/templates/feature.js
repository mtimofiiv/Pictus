import React from "react"

export default function Template({ feature }) {
  return (
    <div className="feature-container">
      <div className="feature-post">
        <h1>{feature.node.frontmatter.title}</h1>
      </div>
    </div>
  )
}
