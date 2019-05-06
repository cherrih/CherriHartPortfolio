import React from 'react';
import ProjectsHome from './ProjectsHome.jsx';
import Lightbox from './Lightbox.jsx';

class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      background: 'none',
      currentView: 'projectsHome',
      display: 'none',
      index: 0,
    };
    this.mouseEnterProject = this.mouseEnterProject.bind(this);
    this.mouseLeaveProject = this.mouseLeaveProject.bind(this);
    this.showProject = this.showProject.bind(this);
    this.hideProject = this.hideProject.bind(this);
  }

  mouseEnterProject(e) {
    let background = 'none';
    const url = 'https://s3-us-west-1.amazonaws.com/cherri-portfolio/';
    if (e.target.className === 'Belen Tenorio Portfolio' || e.target.className === 'Belen Tenorio Portfolio grid-element') {
      background = `url(${url}BelenTenorioPortfolio.png)`;
    }
    if (e.target.className === 'Anna Degenaar Portfolio' || e.target.className === 'Anna Degenaar Portfolio grid-element') {
      background = `url(${url}AnnaDegenaarPortfolio.png)`;
    }
    if (e.target.className === 'FindTables' || e.target.className === 'FindTables grid-element') {
      background = `url(${url}findtables.png)`;
    }
    if (e.target.className === 'Rogue' || e.target.className === 'Rogue grid-element') {
      background = `url(${url}Rogue.png)`;
    }
    if (e.target.className === 'Queertrip' || e.target.className === 'Queertrip grid-element') {
      background = `url(${url}QueerTrip.png)`;
    }
    if (e.target.className === 'Watch.io' || e.target.className === 'Watch.io grid-element') {
      background = `url(${url}Watch.io.png)`;
    }
    this.setState({
      background,
      display: 'block',
    });
  }

  mouseLeaveProject() {
    this.setState({
      background: 'none',
      display: 'none',
    });
  }

  showProject(e) {
    const split = e.target.className.split(' ');
    const currentView = split[0];
    const index = split[split.length - 1];
    this.setState({
      currentView,
      background: 'none',
      display: 'none',
      index,
    });
  }

  hideProject() {
    this.setState({
      currentView: 'projectsHome',
      background: 'none',
      display: 'none',
    });
  }

  render() {
    const {
      background, currentView, display, index,
    } = this.state;
    const projectsStyle = {
      backgroundImage: background,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      display,
    };
    const {
      projects,
    } = this.props;
    return (
      <div>
        {currentView === 'projectsHome'
          && (
          <ProjectsHome
            projects={projects}
            mouseEnterProject={this.mouseEnterProject}
            mouseLeaveProject={this.mouseLeaveProject}
            projectsStyle={projectsStyle}
            showProject={this.showProject}
          />
          )}
        {currentView !== 'projectsHome' && <Lightbox hideProject={this.hideProject} project={projects[index]} />}
      </div>
    );
  }
}

export default Projects;
