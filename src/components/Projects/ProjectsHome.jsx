import React from 'react';
import Grid from './Grid.jsx';

const ProjectsHome = ({
  projects, mouseEnterProject, mouseLeaveProject, showProject, projectsStyle,
}) => (
  <div className="projects-container">
    <Grid
        projects={projects}
        mouseEnterProject={mouseEnterProject}
        mouseLeaveProject={mouseLeaveProject}
        showProject={showProject}
        projectsStyle={projectsStyle}
    />
    <div className="projects-footer">
      <div className="link-arrow-container">
        <a className="link-container" href="https://linkedin.com/in/cherri-hartigan" target="_blank" rel="noopener noreferrer">
          LinkedIn 
          <div className="link-arrow link-arrow-black" />
        </a>
      </div>
      <div className="link-arrow-container">
        <a className="link-container" href="https://github.com/cherrih" target="_blank" rel="noopener noreferrer">
          GitHub
          <div className="link-arrow link-arrow-black" />
        </a>
      </div>
    </div>
  </div>
);

export default ProjectsHome;
