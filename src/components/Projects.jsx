import React from 'react';

const Projects = (props) => {
  const projects = [
    {
      title: 'Rogue',
      description: 'LAUNCHING SOON: Experiential "low fashion" magazine',
      techStack: 'React, Javascript, HTML, CSS, Matter.js, Webpack'
    },
    {
      title: 'Watch.io',
      description: 'Full stack retail product app for watch company',
      techStack: 'Javascript, React, HTML, CSS, MySQL, Express, AWS, Node.js, Webpack'
    },
    {
      title: 'FindTables',
      description: 'Lorem ipsum dolor amet 3 wolf moon magna whatever',
      techStack: 'Javascript, React, HTML, CSS, MySQL, Express, AWS, Node.js, Webpack',
    },
    {
      title: 'Queertrip',
      description: 'Lorem ipsum dolor amet 3 wolf moon magna whatever',
      techStack: 'Javascript, React, HTML, CSS, MySQL, Express, AWS, Node.js, Webpack',
    },
    {
      title: 'Belen Tenorio Portfolio',
      description: 'Lorem ipsum dolor amet 3 wolf moon magna whatever',
      techStack: 'Javascript, React, HTML, CSS, MySQL, Express, AWS, Node.js, Webpack',
    },
    {
      title: 'Anna Degenaar Portfolio',
      description: 'Lorem ipsum dolor amet 3 wolf moon magna whatever',
      techStack: 'Javascript, React, HTML, CSS, MySQL, Express, AWS, Node.js, Webpack',
    }
  ]
  const gridElements = projects.map((project) => {
    return (
      <div key={project.title}>
        <h2>{project.title}</h2>
        <p>{project.techStack}</p>
        <p>{project.description}</p>
      </div>
    )
  })
  return (
    <div className="projects-container">
      <nav className="projects-nav">
        <div className="resume">Resume</div>
        <div className="contact">Contact</div>
      </nav>
      <div className="grid-container">{gridElements}</div>
    </div>
  )
}

export default Projects;