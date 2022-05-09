import React from 'react';

const Project = ({ project }) => {
  const url = 'https://s3-us-west-1.amazonaws.com/cherri-portfolio/';
  const imageSrc = project.title === 'otto'
    ? `${url}${project.img}-min.webp`
    : `${url}${project.img}-min.png`;
  return (
    <div className="small-project-container">
      <img
        className="project-hero"
        src={imageSrc}
        alt={`${project.img} project preview`}
      />
      <div className="small-project-text">
        <h3>{project.title}</h3>
        <p>{project.fullDescription}</p>
        <div>
          {project.photoText.map(text => (
            <p key={text}>{text}</p>
          ))}
        </div>
        <p>
          Full tech-stack:
          {project.techStack}
        </p>
        <p>
          Team:
          {project.team}
        </p>
        {project.link &&
          (
          <p className="link-arrow-container">
            <a
              className="link-container-projects"
              href={project.link.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              Link to
              {project.link.location}
              <span className="link-arrow link-arrow-white" />
            </a>
          </p>
          )}
      </div>
    </div>
  );
};

export default Project;
