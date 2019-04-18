import React from 'react';
import Grid from './Grid.jsx';

class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [
        {
          title: 'Rogue',
          description: 'Launching May 2019: Experiential "low fashion" magazine',
          techStack: 'Javascript, HTML, CSS, React, Webpack, Matter.js, Three.js, WebGL, Git'
        },
        {
          title: 'Queertrip',
          description: 'Full-stack travel app for the LGBTQIA+ community',
          techStack: 'Javascript, React, HTML, CSS, MongoDB, Mongoose.js, Express, Node.js, Webpack, Google Maps API, Git',
        },
        {
          title: 'Watch.io',
          description: 'Full-stack retail product app for watch company',
          techStack: 'Javascript, React, HTML, CSS, MySQL, Express, AWS, Node.js, Webpack, Jest/Enzyme, Git'
        },
        {
          title: 'FindTables',
          description: 'System design of an online restaurant reservation service',
          techStack: 'Javascript, MongoDB, Mongoose.js, PostgreSQL, Express, AWS, Node.js, Webpack, NGINX, K6, New Relic, loader.io, Git',
        },
        {
          title: 'Belen Tenorio Portfolio',
          description: 'Portfolio development for product/brand designer',
          techStack: 'Vanilla Javascript, HTML, CSS, Sketch',
        },
        {
          title: 'Anna Degenaar Portfolio',
          description: 'Portfolio design and development for photographer/writer',
          techStack: 'Javascript, jQuery, HTML, CSS, Sketch',
        }
      ]
    }
  }
  render () {
    return (
      <div className="projects-container">
        <Grid projects={this.state.projects}/>
        <div className="projects-footer" onClick={this.props.toggleProjects}><img src="images/arrow.png" className="rotate-arrow"/> Back to Pac </div>
      </div>
    )
  }
}

export default Projects;