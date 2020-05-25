import React from "react"

export default function Template({ attribute }) {
  return (
    <div className="attribute-post">
      <div className="attribute-image">
        <img src={attribute.node.frontmatter.image} alt="this is car image" />
      </div>
      <div className="attribute-text">
        <div className="attribute-title">{attribute.node.frontmatter.title}</div>
        <div className="attribute-description"
            dangerouslySetInnerHTML={{
              __html: attribute.node.html
            }}
          />
      </div>
    </div>
  )
}
