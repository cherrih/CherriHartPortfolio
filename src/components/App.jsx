import React from 'react';
import Home from './Home.jsx';
import Projects from './Projects.jsx';
import Modal from './Modal.jsx';
import DeadMessage from './DeadMessage.jsx';
import WinMessage from './WinMessage.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isHome: true,
      isProjects: false,
      isModal: false,
      isDead: false,
      isChampion: false,
    };
    this.toggleProjects = this.toggleProjects.bind(this);
    this.goHome = this.goHome.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.toggleDeadMessage = this.toggleDeadMessage.bind(this);
    this.showWinMessage = this.showWinMessage.bind(this);
    this.hideWinMessage = this.hideWinMessage.bind(this);
  }

  componentDidMount() {
    setTimeout(this.toggleModal.bind(this), 2000);
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
    this.setState({
      isModal: !this.state.isModal,
    });
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

  render() {
    const {
      toggleProjects, toggleModal, goHome, toggleDeadMessage, hideWinMessage, showWinMessage,
    } = this;
    const {
      isHome, isModal, isDead, isChampion,
    } = this.state;
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
          isHome ? <Home toggleProjects={toggleProjects} toggleDeadMessage={toggleDeadMessage} showWinMessage={showWinMessage} />
            : <Projects />
        }
        </div>
        {isModal && <Modal close={toggleModal} toggleProjects={toggleProjects} />}
        {isDead && <DeadMessage close={toggleDeadMessage} toggleProjects={toggleProjects} />}
        {isChampion && <WinMessage close={hideWinMessage} toggleProjects={toggleProjects} />}
      </>
    );
  }
}

export default App;
