import React from 'react';

const Projects = (props) => {
  const projects = [
    {
      title: 'Rogue',
      description: 'LAUNCHING SOON: Experiential "low fashion" magazine',
      techStack: 'Javascript, React, HTML, CSS, Matter.js, Webpack'
    },
    {
      title: 'Queertrip',
      description: 'Full-stack travel app for the LGBTQIA+ community',
      techStack: 'Javascript, React, HTML, CSS, MongoDB, Express, Node.js, Webpack, Google Maps API',
    },
    {
      title: 'Watch.io',
      description: 'Full-stack retail product app for watch company',
      techStack: 'Javascript, React, HTML, CSS, MySQL, Express, AWS, Node.js, Webpack, Jest/Enzyme'
    },
    {
      title: 'FindTables',
      description: 'System design of an online restaurant reservation service',
      techStack: 'Javascript, MongoDB, PostgreSQL, Express, AWS, Node.js, Webpack, NGINX, K6, New Relic, loader.io',
    },
    {
      title: 'Belen Tenorio Portfolio',
      description: 'Portfolio development for product/brand designer Belen Tenorio',
      techStack: 'Vanilla Javascript, HTML, CSS, Sketch',
    },
    {
      title: 'Anna Degenaar Portfolio',
      description: 'Portfolio design and development for photographer/writer Anna Degenaar',
      techStack: 'Javascript, jQuery, HTML, CSS, Sketch',
    }
  ]
  const gridElements = projects.map((project) => {
    return (
      <div key={project.title} className="grid-child">
        <h1>{project.title}</h1>
        <p>{project.description}</p>
        <p className="tech-stack">{project.techStack}</p>
      </div>
    )
  })
  return (
    <div className="projects-container">
      <div className="grid-container">{gridElements}</div>
      <div className="projects-footer" onClick={props.toggleProjects}><img src="images/arrow.png" className="rotate-arrow"/> Back to Pac </div>
    </div>
  )
}

export default Projects;