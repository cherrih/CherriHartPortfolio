import React from 'react';
import Grid from './Grid.jsx';

const ProjectsHome = ({projects, mouseEnterProject, mouseLeaveProject, showProject, projectsStyle}) => {

  return (
    <div className="projects-container" style={projectsStyle}>
      <Grid projects={projects} mouseEnterProject={mouseEnterProject} mouseLeaveProject={mouseLeaveProject} showProject={showProject}/>
      <div className="projects-footer">
        <div><a href="https://linkedin.com/in/cherri-hartigan" target="_blank">LinkedIn</a></div>
        <div><a href="https://github.com/cherrih" target="_blank">GitHub</a></div>
      </div>
    </div>
  )
}

export default ProjectsHome;