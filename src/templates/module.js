import React from "react"
import Fade from 'react-reveal/Fade';

export default function Template({ module }) {

  const text = () => (
    <div className={`module-text ${module.node.frontmatter.requirement ? 'indented' : ''}`}>
      <h2 className="module-title">{module.node.frontmatter.title}</h2>
      <div className="module-description"
          dangerouslySetInnerHTML={{
            __html: module.node.html
          }}
        />
    </div>
  )

  return (
    <Fade>
      <div className="module-container">
        <div className="module-post">
          <div>
            { text() }
          </div>
        </div>
      </div>
    </Fade>
  )
}
