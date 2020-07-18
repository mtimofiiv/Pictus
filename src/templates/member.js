import React from "react"
import Fade from 'react-reveal/Fade';

export default function Template({ member }) {

  const text = () => (
    <div className="member-text">
      <h2 className="member-title">{member.node.frontmatter.name}</h2>
      <div className="member-description">{member.node.frontmatter.title}</div>
    </div>
  )

  const image = () => (
    <div className="member-image">
      <img
        src={member.node.frontmatter.image}
        alt={member.node.frontmatter.title}/>
    </div>
  )

  return (
    <Fade>
      <div className="member-container">
        <div className="member-post">
          <div>
            { image() }
            { text() }
          </div>
        </div>
      </div>
    </Fade>
  )
}
