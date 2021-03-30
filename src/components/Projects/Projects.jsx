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
      className.includes('SPACE10 Residency Program')
    ) {
      background = `url(${url}space10.png)`;
    }
    if (className.includes('Pinterest Experiences')) {
      background = `url(${url}pinterest-experience-framework.png)`;
    }
    if (
      className.includes('Pinterest Campaign Builder')
    ) {
      background = `url(${url}propromote.png)`;
    }
    if (
      className.includes('Belen Tenorio Portfolio')
    ) {
      background = `url(${url}BelenTenorioPortfolio.png)`;
    }
    if (
      className.includes('Anna Degenaar Portfolio')
    ) {
      background = `url(${url}AnnaDegenaarPortfolio.png)`;
    }
    if (
      className.includes('FindTables')
    ) {
      background = `url(${url}findtables.png)`;
    }
    if (className.includes('Rogue')) {
      background = `url(${url}Rogue.png)`;
    }
    if (
      className.includes('Queertrip')
    ) {
      background = `url(${url}QueerTrip.png)`;
    }
    if (className.includes('Watch.io grid-element')) {
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
    const { projects } = this.props;
    let newIndex = JSON.parse(index);
    newIndex = newIndex === projects.length - 1 ? 0 : newIndex + 1;
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
