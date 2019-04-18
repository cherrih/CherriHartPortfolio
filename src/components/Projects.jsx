import React from 'react';

const Projects = (props) => {
  const projects = [
    {
      title: 'Rogue',
      description: 'LAUNCHING SOON: Experiential "low fashion" magazine',
      techStack: 'React, Javascript, HTML, CSS, Matter.js, Webpack'
    },
    {
      title: 'Queertrip',
      description: 'Lorem ipsum dolor amet 3 wolf moon magna whatever',
      techStack: 'Javascript, React, HTML, CSS, MySQL, Express, AWS, Node.js, Webpack',
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
      <div key={project.title} className="grid-child">
        <h1>{project.title}</h1>
        <p>{project.techStack}</p>
        <p>{project.description}</p>
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