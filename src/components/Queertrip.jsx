import React from 'react';

const Queertrip = ({ project, hideProject }) => {
  return (
    <div className="lightbox-container">
      <img className="lightbox-hero" src="../../public/images/Rogue.png"/>
      <div className="lightbox-text">
        <h1>{project.title}</h1>
        {/* <h2>{project.date}</h2> */}
        {/* <p>{project.fullDescription}</p> */}
        <p>{project.description}</p>
        <p>Full tech-stack: {project.techStack}</p>
        {/* <p>Team: {project.team}</p> */}
      </div>
      <div className="lightbox-footer" onClick={hideProject}>Back</div>
    </div>
  )
}

export default Queertrip;
