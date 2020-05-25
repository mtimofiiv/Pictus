import React from "react"

export default function Template({ feature }) {
  return (
    <div className="feature-container">
      <div className="feature-post">
        <div className="feature-text">
          <div className="feature-title">{feature.node.frontmatter.title}</div>
          <div className="feature-description"
              dangerouslySetInnerHTML={{
                __html: feature.node.html
              }}
            />
        </div>
        <div className="feature-image">
          <img src={feature.node.frontmatter.image} alt="this is car image" />
        </div>
      </div>
    </div>
  )
}
