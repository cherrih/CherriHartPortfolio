import React from 'react';

const Rogue = ({ hideProject, project }) => {
  return (
    <div className="lightbox-container">
      <video src="https://s3-us-west-1.amazonaws.com/cherri-portfolio/RogueHome.mov" autoPlay="true" className="lightbox-hero" loop="true">
      <img className="lightbox-hero" src="../../public/images/Rogue.png"/>
      </video>
      <div className="lightbox-text">
        <h1>{project.title}</h1>
        <h2>{project.date}</h2>
        <p>{project.fullDescription}</p>
        <p>{project.photoText[0]}</p>
        <p>Full tech-stack: {project.techStack}</p>
        <p>Team: {project.team}</p>
      </div>
      <div className="lightbox-footer" onClick={hideProject}>Back</div>
    </div>
  )
}

export default Rogue;
