import React from 'react';

const MobileProjects = ({ projects, toggleMobileProjects }) => {
  return (
    <div className="small-projects-body">
      <h3>Projects</h3>
      <div className="small-projects-container">
        {
          projects.map(project => (
            <div key={project.title} className={`small${project.id || project.title}`} onClick={toggleMobileProjects}>
              <h4 className={`small${project.id || project.title}`}>{project.shortTitle || project.title}</h4>
            </div>
          ))
        }
      </div>
      <div className="designed-mobile">
        <div>
          Design, concept and code by
        </div>
        <div className="designed-container">
          <div className="link-arrow-container">
            <a href="http://belentenorio.com" target="_blank" rel="noopener noreferrer" className="link-container">
                Belen Tenorio
              <div className="link-arrow link-arrow-white" />
            </a>
          </div>
          <div className="designed-right">and Cherri Hartigan</div>
        </div>
        <div className="link-arrow-container designed-email">
          <a href="mailto:bele.tv@gmail.com" className="link-container">
            Accepting new projects!
            <div className="link-arrow link-arrow-white" />
          </a>
        </div>
      </div>
      
    </div>
  );
};

export default MobileProjects;
