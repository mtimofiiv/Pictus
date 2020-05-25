import React from "react"

export default function Template({ feature }) {
  return (
    <div className="feature-container">
      <div className="feature-post">
        <div>{feature.node.frontmatter.title}</div>
        <div
            dangerouslySetInnerHTML={{
              __html: feature.node.html
            }}
          />
      </div>
    </div>
  )
}
