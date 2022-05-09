import React from 'react';
import ProjectsHome from './ProjectsHome.jsx';
import Lightbox from './Lightbox.jsx';

class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      background: 'none',
      currentView: 'projectsHome',
      opacity: 0,
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
      className.includes('otto')
    ) {
      background = `url(${url}otto.webp)`;
    }
    if (
      className.includes('Squareup.com')
    ) {
      background = `url(${url}squareup.png)`;
    }
    if (
      className.includes('MyHSS Android App')
    ) {
      background = `url(${url}hss.png)`;
    }
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
      opacity: 1,
    });
  }

  mouseLeaveProject() {
    this.setState({
      background: 'none',
      opacity: 0,
    });
  }

  showProject(e) {
    const split = e.target.className.split(' ');
    const currentView = split[0];
    const index = split[split.length - 1];
    this.setState({
      currentView,
      background: 'none',
      opacity: 0,
      index,
    });
  }

  hideProject() {
    this.setState({
      currentView: 'projectsHome',
      background: 'none',
      opacity: 0,
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
    const { background, currentView, opacity, index } = this.state;
    const projectsStyle = {
      backgroundImage: background,
      opacity,
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
