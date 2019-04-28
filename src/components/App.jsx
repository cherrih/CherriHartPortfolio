import React from 'react';
import Home from './Home.jsx';
import Projects from './Projects.jsx';
import Modal from './Modal.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isHome: true,
      isProjects: false,
      isModal: false,
    };
    this.toggleProjects = this.toggleProjects.bind(this);
    this.goHome = this.goHome.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
  }

  componentDidMount() {
    setTimeout(this.toggleModal.bind(this), 3000);
  }

  toggleProjects() {
    this.setState(state => ({
      isProjects: !state.isProjects,
      isHome: !state.isHome,
    }));
  }

  goHome() {
    this.setState({
      isProjects: false,
      isHome: true,
    });
  }

  toggleModal() {
    this.setState({
      isModal: !this.state.isModal,
    });
  }

  render() {
    const { toggleProjects, toggleModal, goHome } = this;
    const { isHome, isModal } = this.state;
    return (
      <>
        <nav className="home-nav">
          <div className="cherri" onClick={goHome}>Cherri Hartigan</div>
          <div className="about">
            <div><a href="https://drive.google.com/open?id=1iPh_-SpDFIY4QKKT0TAIIhfV6kg45O3l" target="_blank" rel="noopener noreferrer">Resume</a></div>
            <div><a href="mailto:cherri.hartigan@gmail.com">Contact </a></div>
          </div>
        </nav>
        <div>
          {
          isHome ? <Home toggleProjects={toggleProjects} />
            : <Projects />
        }
        </div>
        {isModal && <Modal close={toggleModal} />}
      </>
    );
  }
}

export default App;
