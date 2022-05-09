import React from 'react';
import Breakpoint, { BreakpointProvider } from 'react-socks';
import Home from './World/Home.jsx';
import Projects from './Projects/Projects.jsx';
import Modal from './Modal.jsx';
import DeadMessage from './DeadMessage.jsx';
import WinMessage from './WinMessage.jsx';
import MobileHome from './Mobile/MobileHome.jsx';
import MobileProjects from './Mobile/MobileProjects.jsx';
import MobileProject from './Mobile/MobileProject.jsx';
import MobileModal from './Mobile/MobileModal.jsx';
import Menu from './Mobile/Menu.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isHome: true,
      currentView: 'home',
      isMenu: false,
      isProjects: false,
      isMobileModal: false,
      isModal: false,
      isDead: false,
      isChampion: false,
      projects: [
        {
          title: 'otto',
          id: 'otto',
          description: 'Making motion design accessible to all Squares',
          techStack: ' GSAP, React, AWS Lambda, Kubernetes',
          date: 'July 2021 - March 2022',
          fullDescription:
            'Otto is Square\'s web-based rapid prototyping motion tool, built in partnership with New York-based branding agency Athletics. I was the technical lead, working alongside Athletics to create the modular, scalable framework.',
          photoText: [
            'My role included defining and reviewing technical requirements, in-depth code reviews to maintain Square\'s high code standard, and incorporating Athletic\'s codebase into Square\'s ecosystem. It was my responsibility to guarantee a safe, secure, successful system as well as ensure that the tool was able to continue to evolve post-delivery so other engineers at Square could modify, maintain, and extend the tool for future use cases.',
          ],
          team:
            ' Square (Aaron Poe, Akira Kimata, Alicia Cagnoli, Amy Schacter, Anand Doshi, Carl Sturgess, Cherri Hartigan, Chris Ereneta, Christopher Mah, Claudia Ng, Eileen Tjan, Jack Ferrante, Justin Whaley, Philippe Gauthier, Tore Holmberg) + Athletics (Allison Connell, Jameson Proctor, Jason Gnewikow, Kathryn Farwell, Malcolm Buick, Richard Lehmann, Ross Luebe)',
          link: {
            link: 'https://design.squareup.com/ca/en/articles/motion-design-accessible',
            location: ' blog write up',
          },
          video: 'otto.mp4',
          img: 'otto',
        },
        {
          title: 'Squareup.com',
          id: 'squareup',
          description: 'Experimenting with and building delightful top of funnel user experiences to drive sign ups',
          techStack: ' Contentful, Svelte, HTML/CSS/Javascript, GSAP, Ruby on Rails',
          date: 'July 2021 - ongoing',
          fullDescription:
            'Technical lead working closely with product, insights, design and other engineers to build delightful top of funnel user experiences that drive sign ups across squareup.com. The example shown is the Commerce Campaign launched with the Brand team in February 2022.',
          photoText: [
            'Proactively finding opportunities to experiment with new ways of engaging users, building prototypes and conducting A/B tests to validate hypotheses.',
            'Other responsibilities include improving process together with production and design leads, recruiting and onboarding for the design technology team, scaling up others\' skills through coaching and mentorship, project scoping and estimates, proposal and technical writing.',
          ],
          team:
            ' Brand, Marketing, Ecosystem Discovery, Demand Generation, User Research',
          link: {
            link: 'https://squareup.com/commerce',
            location: ' Square\'s commerce campaign',
          },
          video: 'commerce.mp4',
          img: 'squareup',
        },
        {
          title: 'MyHSS Android App',
          id: 'hss',
          description: 'Hospital for Special Surgeries custom MyChart app',
          techStack: ' Java, Kotlin, React',
          date: 'September 2020 - March 2021',
          fullDescription:
            'Alongside the talented team, I built the Android version of a custom healthcare application for HSS, leveraging MyChart\'s infrastructure and webviews (reused in the iOS and web app).',
          photoText: [
          ],
          team:
            ' Kate Scally (product designer), Gabriel Beck (UX designer), Keath Chan (technical director), Jessica Donahue (lead web developer), Sergio Baptista (lead iOS developer), Cherri Hartigan (lead Android developer)',
          img: 'hss',
          link: {
            link: 'https://play.google.com/store/apps/details?id=edu.hss.myhss&hl=en_US&gl=US',
            location: ' MyHSS App on Google Play',
          },
        },
        {
          title: 'SPACE10 Residency Program',
          id: 'space10',
          description: 'Website development for IKEA\'s research/design lab',
          techStack: ' Three.js, React, PHP, Timber',
          date: 'June 2020 - June 2021',
          fullDescription:
            'I was initially contracted to implement the new Residency Program subsite including 3D web animation and component library updates.',
          photoText: [
            'Following the successful launch, my contract was converted to a retainer to update and modernize the site\'s tech stack, url mapping and analytics.',
          ],
          team:
            ' Morten Bjørn (digital coordinator), Mitsuko Sato (designer), Jana Perkovic (editor / copywriter), Cherri Hartigan (full-stack engineer)',
          link: {
            link: 'https://space10.com/residencies/',
            location: ' residency program subsite',
          },
          video: 'space10.mov',
          img: 'space10',
        },
        {
          title: 'Pinterest Experiences',
          id: 'pinterest-experience-framework',
          description: 'Reusable experiences, product and marketing collab',
          techStack: ' Kotlin, Java, React, Python, Gestalt',
          date: 'March - June 2020',
          fullDescription:
            'The Growth Platform team undertook an overhaul of Pinterest\'s Experience Framework with a goal to allow non-engineers to create product features at different stages of a user\'s lifecycle across web, mobile web, and the iOS and Android applications.',
          photoText: [
            'I volunteered to jump into Pinterest\'s Android application. Here you see our "banner" experience in three different configurations: No image, thumbnail image and full width image.',
            'This project won our team an internal award for addressing common pain points, increasing usability and driving millions of additional WAU.',
          ],
          team:
            ' Graham Roth (product manager), Sophia (Feiyang) Feng (engineering manager), Danny Alvarez (web developer), Brian Harris (mobile web developer) Chidinma Egbukichi (iOS developer), Cherri Hartigan (Android developer)',
          videos: [
            {
              video: 'pinterest-you-got-this.mov',
              img: 'pinterest-you-got-this',
            },
            {
              video: 'pinterest-how-we-feel.mov',
              img: 'pinterest-how-we-feel',
            },
            {
              video: 'pinterest-easter.mov',
              img: 'pinterest-easter',
            },
          ],
          img: 'pinterest-experience-framework',
        },
        {
          title: 'Pinterest Campaign Builder',
          id: 'propromote',
          description: "Rework of Pinterest's ad creation flow",
          techStack: ' React, Python, Gestalt',
          date: 'July 2019',
          fullDescription:
            'As part of an internal two day "makeathon" at Pinterest, our team reworked the exisiting ad creation flow to be more in line with the new Pinterest design that launched last year.',
          photoText: [
            'I was responsible for the notoriously finicky masonry component, including the functionality of selecting/deselecting pins and the ad closeup.',
          ],
          team:
            ' Koraldo Kajanaku (concept / design), Meera Srinivasan (product manager), Peter Zed (full-stack engineer), Terell Brown (full-stack engineer), Cherri Hartigan (full-stack engineer)',
          link: {
            link: 'https://6wl14.csb.app/',
            location: ' project',
          },
          video: 'propromote.mov',
          img: 'propromote',
        },
        {
          title: 'Queertrip',
          description: 'Full-stack travel app for the LGBTQIA+ community',
          techStack:
            ' HTML/CSS/Javascript, React, MongoDB, Mongoose.js, Express, Node, Webpack, Google Maps API',
          date: 'Jan 2019 - Ongoing',
          fullDescription:
            'Traveling internationally while queer can sometimes be a scary experience. With Queertrip you can find experiences and people across the globe who will accept you for who you are. Browse through safe spots around the world and share your own tips!',
          photoText: [
            'This project utilized the Google Maps API with custom markers to dynamically display city data persisted in a MongoDB instance.',
          ],
          team:
            ' Belen Tenorio (concept / design), Cherri Hartigan (concept / full-stack engineer)',
          link: {
            link: 'https://queertrip.world',
            location: ' Queertrip V2',
          },
          video: 'Queertrip.mov',
          img: 'QueerTrip',
        },
        {
          title: 'Rogue',
          description: 'Digital experiential "low fashion" magazine',
          techStack:
            ' Javascript, HTML, CSS, React, Webpack, Matter.js, Three.js, WebGL',
          date: 'Feb 2018 - 2019',
          fullDescription:
            'Rogue is an online experiential magazine that explores timeless issues in the context of today. Rogue focuses on storytelling in an interactive way explored through digital experiences.',
          photoText: [
            'The landing page with interactive menu items is built in React, with physics provided by Matter.js.',
          ],
          team:
            ' Belen Tenorio (concept / design), Cherri Hartigan (concept / development), Eli VanAlsburg (model), Isioma Iyamah (model)',
          link: {
            link: 'https://github.com/cherrih/rogue',
            location: ' project on GitHub',
          },
          video: 'RogueHome.mov',
          img: 'Rogue',
        },
        {
          title: 'Watch.io',
          id: 'Watch',
          description: 'Full-stack retail product app for watch company',
          techStack:
            ' Javascript, React, HTML, CSS, MySQL, Express, AWS, Node.js, Webpack, Jest/Enzyme',
          date: 'Dec 2018 - Jan 2019',
          fullDescription: '',
          photoText: [
            'Developed an interactive front-end microservice using JavaScript and React to dynamically render details and specifications for 100 watches.',
            'Seeded MySQL database with 1000 unique rows of watch product information to enforce a single source of truth and avoid data duplication.',
            'Utilized service-oriented architecture by integrating microservices through an Express proxy server to improve team development efficiency.',
            'Improved page load speeds by 53% by minifying webpack bundles and implementing Express compression middleware.',
          ],
          team:
            ' Aaron Deane (full-stack engineer, photo component), Cherri Hartigan (full-stack engineer, summary/cart component), George Qian (full-stack engineer, details component), Linden Chiu (full-stack engineer, reviews component)',
          link: {
            link: 'https://github.com/TheEventHandlers/MVMT-details-specs',
            location: ' project on GitHub',
          },
          video: 'Watch.mov',
          img: 'Watch.io',
        },
        {
          title: 'FindTables',
          description:
            'System design of an online restaurant reservation service',
          techStack:
            ' Javascript, MongoDB, Mongoose.js, PostgreSQL, Express, AWS, Node.js, Webpack, NGINX, K6, New Relic, loader.io',
          date: 'Jan 2019 - Feb 2019',
          fullDescription:
            'I built out and optimized the backend of a photos component of a restaurant reservation application. The goal was to extend the capabilities of the database and server layer to support production-level traffic. I defined success as achieving 1000 RPS with an error rate of less than 1% and latency of less than 200ms.',
          photoText: [
            'In order to choose the optimal database for the component, I benchmarked the performance of Postgres and MongoDB on a production-level dataset (10M records) to explore tradeoffs in SQL and noSQL databases.',
            'MongoDB initially outperformed Postgres, with query speeds between 0-1ms compared to 40 seconds. I reduced Postgre query times from 40 seconds to 3.5 ms by creating relevant btree indexes.',
            "While MongoDB still outperformed Postgres, I considered other tradeoffs in coming to my final decision including write speeds (MongoDB again outperformed Postgres), whether complex querying was required (it wasn't), and transactional integrity (the data was non-transactional in nature).",
            'The next challenge was to benchmark the MongoDB database under production-level traffic. I performed stresstests using K6 and loader.io to simulate sustained web-scale traffic. I identified a bottleneck via New Relic with multiple queries trying to access the database. In order to combat this, I implemented Redis as a data structure store to create a cache for some of the data.',
            'I also changed my stress-test to favour requests to 20% of the database as this would be a more realistic simulation of production. This reduced response times at 1000 rps to 4ms (well below my goal of 200 ms). Error rate remained at 0%.',
            'As a final optimization, I horizontally scaled the microservice using an NGINX load balancer across 3 servers enabling the microservice to handle a 12000 RPS throughput at 34 ms latency and 0% errors.',
          ],
          team:
            ' Cherri Hartigan (back end engineer, photos service), Ed Wu (back end engineer, menu cards service), Johnson Kwok (back end engineer, reviews service), Mike Lau (back end engineer, reservations service)',
          link: {
            link: 'https://github.com/TheEventHandlers/MVMT-details-specs',
            location: ' project on GitHub',
          },
          img: 'findtables',
        },
        {
          title: 'Belen Tenorio Portfolio',
          id: 'Belen',
          shortTitle: 'Belen T Portfolio',
          description: 'Portfolio development for product/brand designer',
          techStack: ' Javascript, HTML, CSS',
          date: 'Apr 2018 - May 2018',
          fullDescription: '',
          photoText: [
            'Portfolio development for product/brand designer Belen Tenorio.',
            'Created a parallax scrolling effect and other unique UI/UX design elements resulting in being featured as site of the day on Typewolf and Wow-Web.',
          ],
          team: ' Belen Tenorio (design), Cherri Hartigan (front end engineer)',
          link: {
            link: 'http://belentenorio.com',
            location: ' project',
          },
          video: 'belentenorio.mov',
          img: 'BelenTenorioPortfolio',
        },
        {
          title: 'Anna Degenaar Portfolio',
          id: 'Anna',
          shortTitle: 'Anna D Portfolio',
          description:
            'Portfolio design and development for photographer/writer',
          techStack: ' Javascript, jQuery, HTML, CSS',
          date: 'Feb 2018 - Mar 2018',
          fullDescription: '',
          photoText: [
            'Portfolio design and development for photographer/writer, Anna Degenaar including click and place photo elements and a photo slideshow.',
          ],
          team: ' Cherri Hartigan (design / front end engineer)',
          link: {
            link: 'https://anna-degenaar.superhi.com',
            location: ' project',
          },
          video: 'annadegenaar.mov',
          img: 'AnnaDegenaarPortfolio',
        },
      ],
    };
    this.toggleProjects = this.toggleProjects.bind(this);
    this.goHome = this.goHome.bind(this);
    this.goHomeMobile = this.goHomeMobile.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
    this.toggleDeadMessage = this.toggleDeadMessage.bind(this);
    this.showWinMessage = this.showWinMessage.bind(this);
    this.hideWinMessage = this.hideWinMessage.bind(this);
    this.toggleMobileProjects = this.toggleMobileProjects.bind(this);
    this.toggleModalMobile = this.toggleModalMobile.bind(this);
  }

  componentDidMount() {
    setTimeout(this.toggleModal, 2000);
    setTimeout(this.toggleModalMobile, 2000);
  }

  toggleProjects() {
    this.setState(state => ({
      isProjects: !state.isProjects,
      isHome: !state.isHome,
      isDead: false,
      isModal: false,
      isChampion: false,
    }));
  }

  goHome() {
    this.setState({
      isProjects: false,
      isHome: true,
    });
  }

  toggleModal() {
    if (this.state.isHome) {
      this.setState({
        isModal: !this.state.isModal,
      });
    }
  }

  toggleDeadMessage() {
    this.setState({
      isDead: !this.state.isDead,
    });
  }

  hideWinMessage() {
    this.setState({
      isChampion: false,
    });
  }

  showWinMessage() {
    this.setState({
      isChampion: true,
    });
  }

  toggleMobileProjects(e) {
    this.setState({
      currentView: e.target.className,
    });
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }

  toggleModalMobile() {
    this.setState({
      isMobileModal: !this.state.isMobileModal,
    });
  }

  goHomeMobile() {
    this.setState({
      currentView: 'home',
    });
  }

  toggleMenu() {
    this.setState({
      isMenu: !this.state.isMenu,
    });
  }

  render() {
    const {
      toggleProjects,
      toggleModal,
      goHome,
      goHomeMobile,
      toggleDeadMessage,
      hideWinMessage,
      showWinMessage,
      toggleMobileProjects,
      toggleMenu,
      toggleModalMobile,
    } = this;
    const {
      isHome,
      isModal,
      isDead,
      isChampion,
      projects,
      currentView,
      isMenu,
      isMobileModal,
    } = this.state;
    return (
      <BreakpointProvider>
        <Breakpoint large up>
          <nav className="home-nav">
            <div className="cherri" onClick={goHome}>
              Cherri Hartigan
            </div>
            <div className="about">
              <div className="link-arrow-container">
                <a
                  className="link-container"
                  href="https://drive.google.com/file/d/10Drb95AjwOp1iuH8jJJFGaTnSLfr8ZBP/view"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Resume
                  <div className="link-arrow link-arrow-black" />
                </a>
              </div>
              <div className="link-arrow-container">
                <a
                  className="link-container"
                  href="mailto:cherri.hartigan@gmail.com"
                >
                  Contact
                  <div className="link-arrow link-arrow-black" />
                </a>
              </div>
            </div>
          </nav>
          {isHome ? (
            <Home
              toggleProjects={toggleProjects}
              toggleDeadMessage={toggleDeadMessage}
              showWinMessage={showWinMessage}
            />
          ) : (
            <Projects projects={projects} />
          )}
          {isModal && !isDead && (
            <Modal close={toggleModal} toggleProjects={toggleProjects} />
          )}
          {isDead && (
            <DeadMessage
              close={toggleDeadMessage}
              toggleProjects={toggleProjects}
            />
          )}
          {isChampion && (
            <WinMessage
              close={hideWinMessage}
              toggleProjects={toggleProjects}
            />
          )}
        </Breakpoint>
        <Breakpoint medium down>
          <div>
            <nav className="small-home-nav">
              <div className="cherri" onClick={goHomeMobile}>
                Cherri Hartigan
              </div>
              <img
                src="https://s3-us-west-1.amazonaws.com/cherri-portfolio/hamburger.svg"
                onClick={toggleMenu}
              />
            </nav>
            <div className="small-home-container">
              {isMobileModal && <MobileModal close={toggleModalMobile} />}
              {isMenu && <Menu toggleMenu={toggleMenu} />}
              {currentView === 'home' && <MobileHome />}
              {currentView === 'smallotto' && (
                <MobileProject project={projects[0]} />
              )}
              {currentView === 'smallsquareup' && (
                <MobileProject project={projects[1]} />
              )}
              {currentView === 'smallhss' && (
                <MobileProject project={projects[2]} />
              )}
              {currentView === 'smallspace10' && (
                <MobileProject project={projects[3]} />
              )}
              {currentView === 'smallpinterest-experience-framework' && (
                <MobileProject project={projects[4]} />
              )}
              {currentView === 'smallpropromote' && (
                <MobileProject project={projects[5]} />
              )}
              {currentView === 'smallQueertrip' && (
                <MobileProject project={projects[6]} />
              )}
              {currentView === 'smallRogue' && (
                <MobileProject project={projects[7]} />
              )}
              {currentView === 'smallWatch' && (
                <MobileProject project={projects[8]} />
              )}
              {currentView === 'smallFindTables' && (
                <MobileProject project={projects[9]} />
              )}
              {currentView === 'smallBelen' && (
                <MobileProject project={projects[10]} />
              )}
              {currentView === 'smallAnna' && (
                <MobileProject project={projects[11]} />
              )}
            </div>
            <MobileProjects
              projects={projects}
              toggleMobileProjects={toggleMobileProjects}
            />
          </div>
        </Breakpoint>
      </BreakpointProvider>
    );
  }
}

export default App;
