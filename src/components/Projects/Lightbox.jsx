import React from 'react';

const Lightbox = ({ project, hideProject, nextProject }) => {
  const isVideo = project.video ? true : false;
  const url = 'https://s3-us-west-1.amazonaws.com/cherri-portfolio/';
  return (
    <div className="lightbox-container">
      <div>
        {isVideo ?
          <video src={`${url}${project.video}.mov`} autoPlay className="lightbox-hero" loop>
            <img className="lightbox-hero" src={`${url}${project.img}.png`} />
          </video> 
          :
          <img className="lightbox-hero" src={`${url}${project.img}.png`} />
        }
      </div>
      <div className="lightbox-text">
        <div className="lightbox-exit" onClick={hideProject}><img src={`${url}xWhite.png`}/></div>
        <h1>{project.title}</h1>
        <h3>{project.date}</h3>
        <p>{project.fullDescription}</p>
        <div>{project.photoText.map(text => <p key={text}>{text}</p>)}</div>
        <p>
          Full tech-stack: 
          { project.techStack }
        </p>
        <div>
          Team:
          {project.team.map(member => <ul key={member}>{member}</ul>)}
        </div>
        <p>
          <u>
            <a href={project.link.link} target="_blank" rel="noopener noreferrer">
            Link to project 
              { project.link.location }
            </a>
          </u>
        </p>
      </div>
      <div className="lightbox-footer">
        <div onClick={hideProject}>
          Back
        </div>
        <div onClick={nextProject}>
          Next Project <img src={`${url}arrow_white.png`} className="next-arrow"/>
        </div>
      </div>
    </div>
  )
};

export default Lightbox;
