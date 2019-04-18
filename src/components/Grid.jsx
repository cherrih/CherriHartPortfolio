import React from 'react';

const Grid = ({ projects }) => {
  return (
    <div className="grid-container">{
      projects.map((project) => {
        return (
          <div key={project.title} className="grid-child">
            <h1>{project.title}</h1>
            <p>{project.description}</p>
            <p className="tech-stack">{project.techStack}</p>
          </div>
        )
      })
    }
    </div>
  )
}

export default Grid;