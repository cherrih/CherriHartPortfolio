import React from 'react';

const Project = ({ project }) => {
  const url = 'https://s3-us-west-1.amazonaws.com/cherri-portfolio/';
  return (
    <div className="small-project-container">
      <img className="project-hero" src={`${url}${project.img}.png`} />
      <h4>{project.title}</h4>
    </div>
  );
};

export default Project;
