import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <nav class="home-nav">
          <div>Cherri Hartigan</div>
          <div>About</div>
        </nav>
        <div id="world"></div>
        <div class="home-footer">
          <div class="lives">
            <img src="images/life.png"/>
            <img src="images/life.png"/>
          </div>
          <div class="score">
            <div id="points">0</div>
            <div>points</div>
          </div>
          <div class="projects">Projects <img src="images/arrow.png"/></div>
        </div>
      </div>
    )
  }
}

export default App;