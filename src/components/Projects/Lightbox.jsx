import React from 'react';

const Lightbox = ({ project, hideProject, nextProject }) => {
  const isVideo = !!project.video;
  const isMultiVideo = !!(project.videos && project.videos.length);
  const url = 'https://s3-us-west-1.amazonaws.com/cherri-portfolio/';
  return (
    <div className="lightbox-container">
      <div className="lightbox-text">
        <div className="lightbox-exit" onClick={hideProject}>
          <img src={`${url}xWhite.svg`} />
        </div>
        <h1>{project.title}</h1>
        <h3>{project.date}</h3>
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
        <div>
          Team:
          {project.team}
        </div>
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
      <div>
        {isVideo && (
          <video
            src={`${url}${project.video}`}
            autoPlay
            className="lightbox-hero"
            loop
            muted
          >
            <img className="lightbox-hero" src={`${url}${project.img}.png`} />
          </video>
        )}
        {isMultiVideo && (
          <div className="lightbox-hero multi-video-hero">
            {project.videos.map(video => (
              <video
                src={`${url}${video.video}`}
                autoPlay
                key={video.video}
                className="multi-video-hero-video"
                loop
                muted
              >
                <img className="multi-video-hero-video" src={`${url}${video.img}.png`} />
              </video>
            ))}
          </div>
        )}
        {!isVideo && !isMultiVideo && (
          <img className="lightbox-hero" src={`${url}${project.img}.png`} />
        )}
      </div>
      <div className="lightbox-footer">
        <div onClick={hideProject}>Back</div>
        <div onClick={nextProject} className="next-arrow-container">
          Next Project
          <span className="next-arrow arrow-white" />
        </div>
      </div>
    </div>
  );
};

export default Lightbox;
