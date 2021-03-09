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
    this.nextProject = this.nextProject.bind(this);
  }

  mouseEnterProject(e) {
    const { className } = e.target;
    let background = 'none';
    const url = 'https://s3-us-west-1.amazonaws.com/cherri-portfolio/';
    if (
      className === 'SPACE10 Residency Program 0'
      || className === 'SPACE10 Residency Program grid-element 0'
    ) {
      background = `url(${url}space10.png)`;
    }
    if (
      className === 'Pinterest Campaign Builder 1'
      || className === 'Pinterest Campaign Builder grid-element 1'
    ) {
      background = `url(${url}propromote.png)`;
    }
    if (
      className === 'Belen Tenorio Portfolio 6'
      || className === 'Belen Tenorio Portfolio grid-element 6'
    ) {
      background = `url(${url}BelenTenorioPortfolio.png)`;
    }
    if (
      className === 'Anna Degenaar Portfolio 7'
      || className === 'Anna Degenaar Portfolio grid-element 7'
    ) {
      background = `url(${url}AnnaDegenaarPortfolio.png)`;
    }
    if (
      className === 'FindTables 5'
      || className === 'FindTables grid-element 5'
    ) {
      background = `url(${url}findtables.png)`;
    }
    if (className === 'Rogue 3' || className === 'Rogue grid-element 3') {
      background = `url(${url}Rogue.png)`;
    }
    if (
      className === 'Queertrip 2'
      || className === 'Queertrip grid-element 2'
    ) {
      background = `url(${url}QueerTrip.png)`;
    }
    if (className === 'Watch.io 4' || className === 'Watch.io grid-element 4') {
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

  nextProject() {
    const { index } = this.state;
    let newIndex = JSON.parse(index);
    newIndex = newIndex === 7 ? 0 : newIndex + 1;
    this.setState({
      index: newIndex,
    });
  }

  render() {
    const { background, currentView, display, index } = this.state;
    const projectsStyle = {
      backgroundImage: background,
      display,
    };
    const { hideProject, nextProject } = this;
    const { projects } = this.props;
    return (
      <div>
        {currentView === 'projectsHome' && (
          <ProjectsHome
            projects={projects}
            mouseEnterProject={this.mouseEnterProject}
            mouseLeaveProject={this.mouseLeaveProject}
            projectsStyle={projectsStyle}
            showProject={this.showProject}
          />
        )}
        {currentView !== 'projectsHome' && (
          <Lightbox
            hideProject={hideProject}
            project={projects[index]}
            nextProject={nextProject}
          />
        )}
      </div>
    );
  }
}

export default Projects;
