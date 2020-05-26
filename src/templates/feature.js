import React from "react"
import Fade from 'react-reveal/Fade';

export default function Template({ feature, even }) {

  const text = () => (
    <div className="feature-text">
      <h2 className="feature-title">{feature.node.frontmatter.title}</h2>
      <div className="feature-description"
          dangerouslySetInnerHTML={{
            __html: feature.node.html
          }}
        />
    </div>
  )

  const image = () => (
    <div className="feature-image">
      <img
        src={feature.node.frontmatter.image}
        alt={feature.node.frontmatter.title}/>
    </div>
  )

  return (
    <Fade>
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
    </Fade>
  )
}
