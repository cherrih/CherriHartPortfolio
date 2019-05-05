import React from 'react';
import ProjectsHome from './ProjectsHome.jsx';
import Lightbox from '../Lightbox.jsx';

class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [
        {
          title: 'Rogue',
          description: 'Digital experiential "low fashion" magazine',
          techStack: ' Javascript, HTML, CSS, React, Webpack, Matter.js, Three.js, WebGL',
          date: 'Feb 2018 - launching Summer 2019',
          fullDescription: 'Rogue is an online experiential magazine that explores timeless issues in the context of today. Rogue focuses on storytelling in an interactive way explored through digital experiences.',
          photoText: [
            'This video shows the landing page with interactive menu items. Built in React, with physics provided by Matter.js',
          ],
          team: ['Belen Tenorio (concept / design)', 'Cherri Hartigan (concept / development)', 'Eli VanAlsburg (model)', 'Isioma Iyamah (model)'],
          link: {
            link: 'https://github.com/cherrih/rogue',
            location: ' on GitHub',
          },
          video: 'RogueHome',
          img: 'Rogue',
        },
        {
          title: 'Queertrip',
          description: 'Full-stack travel app for the LGBTQIA+ community',
          techStack: ' Javascript, React, HTML, CSS, MongoDB, Mongoose.js, Express, Node.js, Webpack, Google Maps API',
          date: 'Jan 2019 - Feb 2019',
          fullDescription: 'Traveling internationally while queer can sometimes be a scary experience. With Queertrips you can find experiences and people across the globe who will accept you for who you are. Browse through safe spots around the world and share your own tips!',
          photoText: [
            'This project utilized the Google Maps API with custom markers to dynamically display city data persisted in a MongoDB instance.',
          ],
          team: ['Belen Tenorio (concept / design)', 'Cherri Hartigan (concept / full-stack engineer)'],
          link: {
            link: 'https://github.com/cherrih/hrsf107-mvp',
            location: ' on GitHub',
          },
          video: 'Queertrip',
          img: 'QueerTrip',
        },
        {
          title: 'Watch.io',
          description: 'Full-stack retail product app for watch company',
          techStack: ' Javascript, React, HTML, CSS, MySQL, Express, AWS, Node.js, Webpack, Jest/Enzyme, Git',
          date: 'Dec 2018 - Jan 2019',
          fullDescription: '',
          photoText: [
            'Developed an interactive front-end microservice using JavaScript and React to dynamically render details and specifications for 100 watches.',
            'Seeded MySQL database with 1000 unique rows of watch product information to enforce a single source of truth and avoid data duplication.',
            'Utilized service-oriented architecture by integrating microservices through an Express proxy server to improve team development efficiency.',
            'Improved page load speeds by 53% by minifying webpack bundles and implementing Express compression middleware.',
          ],
          team: ['Aaron Deane (full-stack engineer, photo component)', 'Cherri Hartigan (full-stack engineer, summary/cart component)', 'George Qian (full-stack engineer, details component)', 'Linden Chiu (full-stack engineer, reviews component)'],
          link: {
            link: 'https://github.com/TheEventHandlers/MVMT-details-specs',
            location: ' on GitHub',
          },
          video: 'Watch',
          img: 'Watch.io',
        },
        {
          title: 'FindTables',
          description: 'System design of an online restaurant reservation service',
          techStack: ' Javascript, MongoDB, Mongoose.js, PostgreSQL, Express, AWS, Node.js, Webpack, NGINX, K6, New Relic, loader.io, Git',
          date: 'Jan 2019 - Feb 2019',
          fullDescription: 'I built out and optimized the backend of a photos component of a restaurant reservation application. The goal was to extend the capabilities of the database and server layer to support production-level traffic. I defined success as achieving 1000 RPS with an error rate of less than 1% and latency of less than 200ms.',
          photoText: [
            'In order to choose the optimal database for the component, I benchmarked the performance of Postgres and MongoDB on a production-level dataset (10M records) to explore tradeoffs in SQL and noSQL databases.',
            'MongoDB initially outperformed Postgres, with query speeds between 0-1ms compared to 40 seconds. I reduced Postgre query times from 40 seconds to 3.5 ms by creating relevant btree indexes.',
            'While MongoDB still outperformed Postgres, I considered other tradeoffs in coming to my final decision including write speeds (MongoDB again outperformed Postgres), ACID compliance (a feature of both databases), and SQL vs NoSQL features.',
            'The next challenge was to benchmark the MongoDB database under production-level traffic. I performed stresstests using K6 and loader.io to simulate sustained web-scale traffic. I identified a bottleneck via New Relic with multiple queries trying to access the database. In order to combat this, I implemented Redis as a data structure store to create a cache for some of the data.',
            'I also changed my stress-test to favour requests to 20% of the database as this would be a more realistic simulation of production. This reduced response times at 1000 rps to 4ms (well below my goal of 200 ms). Error rate remained at 0%.',
            'As a final optimization, I horizontally scaled the microservice using an NGINX load balancer across 3 servers enabling the microservice to handle a 12000 RPS throughput at 34 ms latency and 0% errors.',
          ],
          team: [
            'Cherri Hartigan (back end engineer, photos service)',
            'Ed Wu (back end engineer, menu cards service)',
            'Johnson Kwok (back end engineer, reviews service)',
            'Mike Lau (back end engineer, reservations service)',
          ],
          link: {
            link: 'https://github.com/TheEventHandlers/MVMT-details-specs',
            location: ' on GitHub',
          },
          img: 'findtables',
        },
        {
          title: 'Belen Tenorio Portfolio',
          description: 'Portfolio development for product/brand designer',
          techStack: ' Javascript, HTML, CSS, Sketch',
          date: 'Apr 2018 - May 2018',
          fullDescription: '',
          photoText: [
            'We architected responsive design to ensure user-friendly interaction across multiple devices.',
            'We created a parallax scrolling effect and other unique UI/UX design elements resulting in being featured as site of the day on Typewolf and Wow-Web.'
          ],
          team: ['Belen Tenorio (design)', 'Cherri Hartigan (front end engineer)'],
          link: {
            link: 'http://belentenorio.com',
            location: '',
          },
          video: 'belentenorio',
          img: 'BelenTenorioPortfolio',
        },
        {
          title: 'Anna Degenaar Portfolio',
          description: 'Portfolio design and development for photographer/writer',
          techStack: ' Javascript, jQuery, HTML, CSS, Sketch',
          date: 'Feb 2018 - Mar 2018',
          fullDescription: '',
          photoText: ['Portfolio design and development for photographer/writer, Anna Degenaar including click and place photo elements and a photo slideshow.'],
          team: ['Cherri Hartigan (design / front end engineer)'],
          link: {
            link: 'http://www.annadegenaar.com',
            location: '',
          },
          video: 'annadegenaar',
          img: 'AnnaDegenaarPortfolio',
        },
      ],
      background: 'none',
      currentView: 'projectsHome',
      display: 'none',
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
    const currentView = e.target.className.split(' ')[0];
    this.setState({
      currentView,
      background: 'none',
      display: 'none',
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
      projects, background, currentView, display,
    } = this.state;
    const projectsStyle = {
      backgroundImage: background,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      display: display,
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
        {currentView === 'Rogue' && <Lightbox hideProject={this.hideProject} project={projects[0]} />}
        {currentView === 'Queertrip' && <Lightbox hideProject={this.hideProject} project={projects[1]} />}
        {currentView === 'Watch.io' && <Lightbox hideProject={this.hideProject} project={projects[2]} />}
        {currentView === 'FindTables' && <Lightbox hideProject={this.hideProject} project={projects[3]} />}
        {currentView === 'Belen' && <Lightbox hideProject={this.hideProject} project={projects[4]} />}
        {currentView === 'Anna' && <Lightbox hideProject={this.hideProject} project={projects[5]} />}
      </div>
    );
  }
}

export default Projects;
