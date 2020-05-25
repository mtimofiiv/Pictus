import React from "react"

export default function Template({ feature, even }) {

  const text = () => (
    <div className="feature-text">
      <div className="feature-title">{feature.node.frontmatter.title}</div>
      <div className="feature-description"
          dangerouslySetInnerHTML={{
            __html: feature.node.html
          }}
        />
    </div>
  )

  const image = () => (
    <div className="feature-image">
      <img src={feature.node.frontmatter.image} alt="this is car image" />
    </div>
  )

  console.log(even)

  return (
    <div className="feature-container">
      <div className="feature-post">
        { even ? (
          <div>
            { image() }
            { text() }
          </div>
        ) : (
          <div>
            { text() }
            { image() }
          </div>
        )}
      </div>
    </div>
  )
}
