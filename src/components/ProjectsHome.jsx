import React from 'react';
import Grid from './Grid.jsx';

const ProjectsHome = ({projects, mouseEnterProject, mouseLeaveProject, showProject, toggleProjects, projectsStyle}) => {

  return (
    <div className="projects-container" style={projectsStyle}>
      <Grid projects={projects} mouseEnterProject={mouseEnterProject} mouseLeaveProject={mouseLeaveProject} showProject={showProject}/>
      <div className="projects-footer" onClick={toggleProjects}><img src="images/arrow.png" className="rotate-arrow"/> Back to Pac </div>
    </div>
  )
}

export default ProjectsHome;