import React from 'react';
import Home from './Home.jsx';
import Projects from './Projects.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isHome: true,
      isProjects: false,
      isAbout: false
    };
    this.toggleProjects = this.toggleProjects.bind(this);
    this.goHome = this.goHome.bind(this);
  }
  
  toggleProjects() {
    this.setState({
      isProjects: !this.state.isProjects,
      isHome: !this.state.isHome
    })
  }
  goHome() {
    console.log('home')
    this.setState({
      isProjects: false,
      isHome: true
    })
  }

  render() {
    return (
      <>
        <nav className="home-nav">
          <div className="cherri" onClick={this.goHome}>Cherri Hartigan</div>
          <div className="about">
            <div>Resume</div>
            <div>Contact</div>
            <div>About</div>
          </div>
        </nav>
        <div>{
          this.state.isHome ? <Home toggleProjects={this.toggleProjects}/>
          :
          <Projects toggleProjects={this.toggleProjects}/>
        }
        </div>
      </>
    )
  }
}

export default App;