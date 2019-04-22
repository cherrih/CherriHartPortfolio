import React from 'react';

const Rogue = ({ hideProject, project }) => {
  return (
    <div className="lightbox-container">
      <img className="lightbox-hero" src="../../public/images/Rogue.png"/>
      <div className="lightbox-text">
        <h1>{project.title}</h1>
        <p>{project.description}</p>
        <p>{project.techStack}</p>
        <p>{project.photoText[0]}</p>
      </div>
      <div className="lightbox-footer" onClick={hideProject}>Back</div>
    </div>
  )
}

export default Rogue;
