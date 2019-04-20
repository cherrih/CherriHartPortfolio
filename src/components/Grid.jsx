import React from 'react';

const Grid = ({ projects, mouseEnterProject, mouseLeaveProject, showProject }) => {
  return (
    <div className="grid-container">{
      projects.map((project) => {
        return (
          <div key={project.title} className={`${project.title} grid-element`}  id={project.title} onMouseEnter={mouseEnterProject} onMouseLeave={mouseLeaveProject} onClick={showProject}>
            <h1 className={project.title}>{project.title}</h1>
            <p className={project.title}>{project.description}</p>
            <p className={project.title}>{project.techStack}</p>
          </div>
        )
      })
    }
    </div>
  )
}

export default Grid;