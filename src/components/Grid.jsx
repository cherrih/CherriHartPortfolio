import React from 'react';

const Grid = ({ projects, mouseEnterProject, mouseLeaveProject }) => {
  return (
    <div className="grid-container">{
      projects.map((project) => {
        return (
          <div key={project.title} className="grid-element" id={project.title} onMouseEnter={mouseEnterProject} onMouseLeave={mouseLeaveProject}>
            <h1>{project.title}</h1>
            <p>{project.description}</p>
            <p>{project.techStack}</p>
          </div>
        )
      })
    }
    </div>
  )
}

export default Grid;