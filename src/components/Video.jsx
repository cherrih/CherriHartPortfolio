import React from 'react';

const Video = ({ project, hideProject }) => {
  return (
    <div className="lightbox-container">
      <video src={`https://s3-us-west-1.amazonaws.com/cherri-portfolio/${project.video}.mov`} autoPlay={true} className="lightbox-hero" loop={true}>
      <img className="lightbox-hero" src={project.img}/>
      </video>
      <div className="lightbox-text">
        <div className="light-box-exit" onClick={hideProject}>x</div>
        <h1>{project.title}</h1>
        <h3>{project.date}</h3>
        <p>{project.fullDescription}</p>
        <p>{project.photoText[0]}</p>
        <p>Full tech-stack: {project.techStack}</p>
        <p>Team: {project.team}</p>
        <p><a href={project.link.link}>Link to {project.title} {project.link.location}</a></p>
      </div>
      <div className="lightbox-footer" onClick={hideProject}>Back</div>
    </div>
  )
}

export default Video;
