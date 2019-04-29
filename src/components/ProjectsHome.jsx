import React from 'react';
import Grid from './Grid.jsx';

const ProjectsHome = ({
  projects, mouseEnterProject, mouseLeaveProject, showProject, projectsStyle,
}) => (
  <div className="projects-container" style={projectsStyle}>
    <div></div>
    <Grid
      projects={projects}
      mouseEnterProject={mouseEnterProject}
      mouseLeaveProject={mouseLeaveProject}
      showProject={showProject}
    />
    <div className="projects-footer">
      <div><a href="https://linkedin.com/in/cherri-hartigan" target="_blank" rel="noopener noreferrer">LinkedIn</a></div>
      <div><a href="https://github.com/cherrih" target="_blank" rel="noopener noreferrer">GitHub</a></div>
    </div>
  </div>
);

export default ProjectsHome;
