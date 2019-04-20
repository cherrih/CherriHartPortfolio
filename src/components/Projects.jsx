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
      ],
      background: 'none',
    }
    this.mouseEnterProject = this.mouseEnterProject.bind(this);
    this.mouseLeaveProject = this.mouseLeaveProject.bind(this);
  }
  mouseEnterProject(e) {
    console.log(e.target.className)
    let background = 'none';
    if (e.target.className === 'Belen Tenorio Portfolio' || e.target.className === 'Belen Tenorio Portfolio grid-element') {
      background = 'url(../../../../public/images/BelenTenorioPortfolio.png)';
    }
    if (e.target.className === 'Anna Degenaar Portfolio' || e.target.className === 'Anna Degenaar Portfolio grid-element') {
      background = 'url(../../../../public/images/AnnaDegenaarPortfolio.png)';      
    }
    if (e.target.className === 'FindTables' || e.target.className === 'FindTables grid-element') {
      background = 'url(../../../../public/images/FindTables.png)';      
    }
    if (e.target.className === 'Rogue' || e.target.className === 'Rogue grid-element') {
      background = 'url(../../../../public/images/Rogue.png)';      
    }
    if (e.target.className === 'Queertrip' || e.target.className === 'Queertrip grid-element') {
      background = 'url(../../../../public/images/QueerTrip1.png)';      
    }
    if (e.target.className === 'Watch.io' || e.target.className === 'Watch.io grid-element') {
      background = 'url(../../../../public/images/Watch.io1.png)';      
    }
    this.setState({
      background: background
    })
  }
  mouseLeaveProject() {
    this.setState({
      background: 'none'
    })
  }

  render () {
    const { projects, background } = this.state;
    const projectsStyle = {
      backgroundImage: background,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center'
    }
    return (
      <div className="projects-container" style={projectsStyle}>
        <Grid projects={projects} mouseEnterProject={this.mouseEnterProject} mouseLeaveProject={this.mouseLeaveProject}/>
        <div className="projects-footer" onClick={this.props.toggleProjects}><img src="images/arrow.png" className="rotate-arrow"/> Back to Pac </div>
      </div>
    )
  }
}

export default Projects;