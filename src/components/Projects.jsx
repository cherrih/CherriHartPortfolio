import React from 'react';
import ProjectsHome from './ProjectsHome.jsx';
import Video from './Video.jsx';

class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [
        {
          title: 'Rogue',
          description: 'Digital experiential "low fashion" magazine',
          techStack: 'Javascript, HTML, CSS, React, Webpack, Matter.js, Three.js, WebGL',
          date: 'Feb 2018 - launching May 2019',
          fullDescription: 'Rogue is an online experiential magazine that explores timeless issues in the context of today. Rogue focuses on storytelling in an interactive way explored through digital experiences.',
          photoText: [
            'This video shows the landing page with interactive menu items. Built in React, with physics provided by Matter.js',
          ],
          team: ['Belen Tenorio (design / concept)', 'Cherri Hartigan (development / concept)', 'Eli VanAlsburg (model)', 'Isioma Iyamah (model)'],
          link: {
            link: 'https://github.com/cherrih/rogue',
            location: 'on GitHub',
          },
          video: 'RogueHome',
          img: '../../public/images/Rogue.png',
        },
        {
          title: 'Queertrip',
          description: 'Full-stack travel app for the LGBTQIA+ community',
          techStack: 'Javascript, React, HTML, CSS, MongoDB, Mongoose.js, Express, Node.js, Webpack, Google Maps API',
          date: 'Jan 2019 - Feb 2019',
          fullDescription: 'Traveling internationally while queer can sometimes be a scary experience. With Queertrips you can find experiences and people across the globe who will accept you for who you are. Browse through safe spots around the world and share your own tips!',
          photoText: [
            'This project utilized the Google Maps API with custom markers to dynamically display city data persisted in a MongoDB instance',
          ],
          team: ['Belen Tenorio (design/concept)', 'Cherri Hartigan (concept/full-stack engineer)'],
          link: {
            link: 'https://github.com/cherrih/hrsf107-mvp',
            location: 'on GitHub',
          },
          video: 'Queertrip',
          img: '../../../../public/images/QueerTrip1.png',
        },
        {
          title: 'Watch.io',
          description: 'Full-stack retail product app for watch company',
          techStack: 'Javascript, React, HTML, CSS, MySQL, Express, AWS, Node.js, Webpack, Jest/Enzyme, Git',
          date: 'Dec 2018 - Jan 2019',
          fullDescription: '',
          photoText: ['Developed an interactive front-end microservice using JavaScript and React to dynamically render details and specifications for 100 watches.', 'Seeded MySQL database with 1000 unique rows of watch product information to enforce a single source of truth and avoid data duplication.', 'Utilized service-oriented architecture by integrating microservices through an Express proxy server to improve team development efficiency.', 'Improved page load speeds by 53% by minifying webpack bundles and implementing Express compression middleware'],
          team: ['Aaron Deane (full-stack engineer, photo component)', 'Cherri Hartigan (full-stack engineer, summary/cart component)', 'George Qian (full-stack engineer, details component)', 'Linden Chiu (full-stack engineer, reviews component)'],
          link: {
            link: 'https://github.com/TheEventHandlers/MVMT-details-specs',
            location: 'on GitHub',
          },
          video: 'Watch',
          img: '../../../../public/images/Watch.io1.png',
        },
        {
          title: 'FindTables',
          description: 'System design of an online restaurant reservation service',
          techStack: 'Javascript, MongoDB, Mongoose.js, PostgreSQL, Express, AWS, Node.js, Webpack, NGINX, K6, New Relic, loader.io, Git',
          date: 'Jan 2019 - Feb 2019',
          fullDescription: '',
          photoText: ['Horizontally scaled microservice using an NGINX load balancer across 3 servers to handle a 12000 RPS throughput at 34 ms latency and 0% errors',
            'Benchmarked Postgres and MongoDB performance on a production-level dataset (10M records) to explore tradeoffs in SQL and noSQL databases',
            'Reduced Postgres query times from 40 seconds to 3.5 ms on a table of 150M records by creating relevant btree indexes',
            'Performed stress tests using K6 and loader.io to simulate sustained web-scale traffic and identified performance bottlenecks on New Relic'],
          team: [''],
          link: {
            link: 'https://github.com/TheEventHandlers/MVMT-details-specs',
            location: 'on GitHub',
          },
          video: '',
          img: '../../../../public/images/FindTables.png',
        },
        {
          title: 'Belen Tenorio Portfolio',
          description: 'Portfolio development for product/brand designer',
          techStack: 'Vanilla Javascript, HTML, CSS, Sketch',
          date: 'Apr 2018 - May 2018',
          fullDescription: '',
          photoText: ['We architected responsive design to ensure user-friendly interaction across multiple devices.', 'We created a parallax scrolling effect and other unique UI/UX design elements resulting in being featured as site of the day on Typewolf and Wow-Web.'],
          team: ['Belen Tenorio (design / development)', 'Cherri Hartigan (front end engineer)'],
          link: {
            link: 'http://belentenorio.com',
            location: '',
          },
          video: 'belentenorio',
          img: '',
        },
        {
          title: 'Anna Degenaar Portfolio',
          description: 'Portfolio design and development for photographer/writer',
          techStack: 'Javascript, jQuery, HTML, CSS, Sketch',
          date: 'Feb 2018 - Mar 2018',
          fullDescription: '',
          photoText: [''],
          team: ['Cherri Hartigan (design / front end engineer)'],
          link: {
            link: 'http://www.annadegenaar.com',
            location: '',
          },
          video: 'annadegenaar',
          img: '',
        },
      ],
      background: 'none',
      currentView: 'projectsHome',
    };
    this.mouseEnterProject = this.mouseEnterProject.bind(this);
    this.mouseLeaveProject = this.mouseLeaveProject.bind(this);
    this.showProject = this.showProject.bind(this);
    this.hideProject = this.hideProject.bind(this);
  }

  mouseEnterProject(e) {
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
      background = 'url(../../../../public/images/QueerTrip.png)';
    }
    if (e.target.className === 'Watch.io' || e.target.className === 'Watch.io grid-element') {
      background = 'url(../../../../public/images/Watch.io.png)';
    }
    this.setState({
      background,
    });
  }

  mouseLeaveProject() {
    this.setState({
      background: 'none',
    });
  }

  showProject(e) {
    const currentView = e.target.className.split(' ')[0];
    this.setState({
      currentView,
    });
  }

  hideProject() {
    this.setState({
      currentView: 'projectsHome',
    });
  }

  render() {
    const { projects, background, currentView } = this.state;
    const projectsStyle = {
      backgroundImage: background,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
    };
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
        {currentView === 'Rogue' && <Video hideProject={this.hideProject} project={projects[0]} />}
        {currentView === 'Queertrip' && <Video hideProject={this.hideProject} project={projects[1]} />}
        {currentView === 'Watch.io' && <Video hideProject={this.hideProject} project={projects[2]} />}
        {currentView === 'FindTables' && <Video hideProject={this.hideProject} project={projects[3]} />}
        {currentView === 'Belen' && <Video hideProject={this.hideProject} project={projects[4]} />}
        {currentView === 'Anna' && <Video hideProject={this.hideProject} project={projects[5]} />}
      </div>
    );
  }
}

export default Projects;
