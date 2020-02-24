import React from 'react';

const Grid = ({
  projects,
  mouseEnterProject,
  mouseLeaveProject,
  showProject,
  projectsStyle,
}) => (
  <div className="grid-container">
    <div className="projects-photo-preview" style={projectsStyle} />
    {projects.map((project, i) => (
      <div
        key={project.title}
        className={`${project.title} grid-element ${i}`}
        id={project.title}
        onMouseEnter={mouseEnterProject}
        onMouseLeave={mouseLeaveProject}
        onClick={showProject}
      >
        <h1 className={`${project.title} ${i}`}>{project.title}</h1>
        <p className={`${project.title} ${i}`}>{project.description}</p>
        <p className={`${project.title} ${i}`}>{project.techStack}</p>
      </div>
    ))}
  </div>
);

export default Grid;
