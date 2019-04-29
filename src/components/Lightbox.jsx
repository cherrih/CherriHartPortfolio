import React from 'react';

const Video = ({ project, hideProject }) => (
  <div className="lightbox-container">
    <video src={`https://s3-us-west-1.amazonaws.com/cherri-portfolio/${project.video}.mov`} autoPlay className="lightbox-hero" loop>
      <img className="lightbox-hero" src={project.img} />
    </video>
    <div className="lightbox-text">
      <div className="lightbox-exit" onClick={hideProject}>x</div>
      <h1>{project.title}</h1>
      <h3>{project.date}</h3>
      <p>{project.fullDescription}</p>
      <div>{project.photoText.map(text => <p key="text">{text}</p>)}</div>
      <p>
        Full tech-stack: 
        { project.techStack }
      </p>
      <p>
        Team:
        {project.team.map(member => <ul key="member">{member}</ul>)}
      </p>
      <p>
        <u>
          <a href={project.link.link} target="_blank" rel="noopener noreferrer">
          Link to project 
            { project.link.location }
          </a>
        </u>
      </p>
    </div>
    <div className="lightbox-footer" onClick={hideProject}>Back</div>
  </div>
);

export default Video;
