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
      <div>{
        this.state.isHome ? <Home showProjects={this.showProjects}/>
        :
        <Projects />
      }
      </div>
    )
  }
}

export default App;