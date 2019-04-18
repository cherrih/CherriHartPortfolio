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
    this.showProjects = this.showProjects.bind(this);
  }
  
  showProjects() {
    this.setState({
      isProjects: true,
      isHome: false
    })
  }

  render() {
    return (
      <>
        <nav className="home-nav">
          <div className="cherri">Cherri Hartigan</div>
          <div className="about">
            <div>Resume</div>
            <div>Contact</div>
            <div>About</div>
          </div>
        </nav>
        <div>{
          this.state.isHome ? <Home showProjects={this.showProjects}/>
          :
          <Projects />
        }
        </div>
      </>
    )
  }
}

export default App;