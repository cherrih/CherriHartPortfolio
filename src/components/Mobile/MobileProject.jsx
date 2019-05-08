import React from 'react';

const Project = ({ project }) => {
  const url = 'https://s3-us-west-1.amazonaws.com/cherri-portfolio/';
  return (
    <div className="small-project-container">
      <img className="project-hero" src={`${url}${project.img}.png`} />
      <div className="small-project-text">
        <h3>{project.title}</h3>
        <p>{project.fullDescription}</p>
        <div>{project.photoText.map(text => <p key={text}>{text}</p>)}</div>
        <p>
          Full tech-stack: 
          { project.techStack }
        </p>
        <p>
          Team:
          { project.team }
        </p>
        <p className="link-arrow-container">
          <a className="link-container-projects" href={project.link.link} target="_blank" rel="noopener noreferrer">
          Link to project 
            { project.link.location }
            <div className="link-arrow link-arrow-white" />
          </a>
        </p>
      </div>
    </div>
  );
};

export default Project;
