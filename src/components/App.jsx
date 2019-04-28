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
      isAbout: false,
      isModal: false
    };
    this.toggleProjects = this.toggleProjects.bind(this);
    this.goHome = this.goHome.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
  }
  
  toggleProjects() {
    this.setState({
      isProjects: !this.state.isProjects,
      isHome: !this.state.isHome
    })
  }
  goHome() {
    this.setState({
      isProjects: false,
      isHome: true
    })
  }
  toggleModal() {
    console.log('modal')
    this.setState({
      isModal: !this.state.isModal
    })
  }
  componentDidMount() {
    setTimeout(this.toggleModal.bind(this), 3000)
  }
  render() {
    return (
      <>
        <nav className="home-nav">
          <div className="cherri" onClick={this.goHome}>Cherri Hartigan</div>
          <div className="about">
            <div><a href="https://drive.google.com/open?id=1iPh_-SpDFIY4QKKT0TAIIhfV6kg45O3l" target="_blank">Resume</a></div>
            <div><a href="mailto:cherri.hartigan@gmail.com">Contact </a></div>
          </div>
        </nav>
        <div>{
          this.state.isHome ? <Home toggleProjects={this.toggleProjects}/>
          :
          <Projects />
        }
        </div>
        {this.state.isModal && <Modal close={this.toggleModal}/>}
      </>
    )
  }
}

export default App;