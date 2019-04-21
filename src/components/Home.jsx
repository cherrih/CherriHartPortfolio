import React from 'react';
import World from './World.jsx';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      matrix: [],
      pac: {
        x: 6,
        y: 1,
        left: false,
      },
      score: 0,
      g7: {
        x: 42,
        y: 7
      },
      g8: {
        x: 31,
        y: 10
      },
      g9: {
        x: 43,
        y: 1
      }
    }
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }
  componentDidMount() {
    const text = 
      ["33333333333333333333333333333333333333333333",
      "3333332 Hailing from 1 the land of3333333339",
      "333333sheep and kiwis (New Zealand),33333333", 
      "333333I am a San Francisco-based 13333333333", 
      "333333Full-Stack developer, Creator and33333",
      "333333Collaborator. 1 Currently seeking a333", 
      "333333user-focused Creative Technologist /33", 
      "333333Front-End Developer role.3133333333373", 
      "333333Fancy a collaboration or interested333", 
      "333333in chatting? Let's talk!33333333333333",
      "33333333333333333333333333333338333333333333"];
    
    const matrix = [];
    text.forEach(line => {
      matrix.push(line.split(''))
    });
    this.setState({
      matrix: matrix
    })
  }
  componentWillMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown(e) {
    e.preventDefault();
    let pieceToEat;
    let { g7, g8, g9, matrix, pac, score } = this.state;
    if (e.keyCode === 37) {
      // move pac left
      if (pac.x > 0) {
        pac.left = true;
        matrix[pac.y][pac.x] = '3';
        pac.x -= 1;
        pieceToEat = matrix[pac.y][pac.x];
        matrix[pac.y][pac.x] = '2';
      }
      // move g9 right
      if (g9.x < matrix[pac.y].length - 1 && matrix[g9.y][g9.x + 1] === '3') {
        matrix[g9.y][g9.x] = '3';
        g9.x += 1;
        matrix[g9.y][g9.x] = '9';
      }
      // move g8 right
      if (g8.x < matrix[pac.y].length - 1 && matrix[g8.y][g8.x + 1] === '3') {
        matrix[g8.y][g8.x] = '3';
        g8.x += 1;
        matrix[g8.y][g8.x] = '8';
      }
      // move g7 down
      if (g7.y < matrix.length - 1 && matrix[g7.y + 1][g7.x] === '3') {
        matrix[g7.y][g7.x] = '3';
        g7.y += 1;
        matrix[g7.y][g7.x] = '7';
      }
    }
    // move pac right
    if (e.keyCode === 39) {
      if (pac.x < matrix[pac.y].length - 1){
        pac.left = false;
        matrix[pac.y][pac.x] = '3';
        pac.x += 1;
        pieceToEat = matrix[pac.y][pac.x];
        matrix[pac.y][pac.x] = '2';
      }
      // move g9 left
      if (g9.x > 0 && matrix[g9.y][g9.x - 1] === '3') {
        matrix[g9.y][g9.x] = '3';
        g9.x -= 1;
        matrix[g9.y][g9.x] = '9';
      }
      // move g8 left
      if (g8.x > 0 && matrix[g8.y][g8.x - 1] === '3') {
        matrix[g8.y][g8.x] = '3';
        g8.x -= 1;
        matrix[g8.y][g8.x] = '8';
      }
      // move g7 up
      if (g7.y > 0 && matrix[g7.y - 1][g7.x] === '3') {
        matrix[g7.y][g7.x] = '3';
        g7.y -= 1;
        matrix[g7.y][g7.x] = '7';
      }
    }
    if (e.keyCode === 38) {
      // move pac up 
      if (pac.y > 0) {
        pac.left = false;
        matrix[pac.y][pac.x] = '3';
        pac.y -= 1;
        pieceToEat = matrix[pac.y][pac.x];
        matrix[pac.y][pac.x] = '2';
      }
      // move g9 up
      if (g9.y > 0 && matrix[g9.y - 1][g9.x] === '3') {
        matrix[g9.y][g9.x] = '3';
        g9.y -= 1;
        matrix[g9.y][g9.x] = '9';
      }
      // move g8 down
      if (g8.y < matrix.length - 1 && matrix[g8.y + 1][g8.x] === '3') {
        matrix[g8.y][g8.x] = '3';
        g8.y += 1;
        matrix[g8.y][g8.x] = '8';
      }
      // move g7 right
      if (g7.x < matrix[pac.y].length - 1 && matrix[g7.y][g7.x + 1] === '3') {
        matrix[g7.y][g7.x] = '3';
        g7.x += 1;
        matrix[g7.y][g7.x] = '7';
      }
    }
    if (e.keyCode === 40 ) {
      // move pac down
      if (pac.y < matrix.length - 1) {
        pac.left = false;
        matrix[pac.y][pac.x] = '3';
        pac.y += 1;
        pieceToEat = matrix[pac.y][pac.x];
        matrix[pac.y][pac.x] = '2';
      }
      // move g9 down
      if (g9.y < matrix.length - 1 && matrix[g9.y + 1][g9.x] === '3') {
        matrix[g9.y][g9.x] = '3';
        g9.y += 1;
        matrix[g9.y][g9.x] = '9';
      }
      // move g8 up
      if (g8.y > 0 && matrix[g8.y - 1][g8.x] === '3') {
        matrix[g8.y][g8.x] = '3';
        g8.y -= 1;
        matrix[g8.y][g8.x] = '8';
      }
      // move g7 left
      if (g7.x > 0 && matrix[g7.y][g7.x - 1] === '3') {
        matrix[g7.y][g7.x] = '3';
        g7.x -= 1;
        matrix[g7.y][g7.x] = '7';
      }
    }
    if (pieceToEat === '1') {
      score += 10;
    } else if (pieceToEat === '7' || pieceToEat === '8' || pieceToEat === '9'){
      score += 20;
    } else if (pieceToEat && pieceToEat !== '3') {
      score += 2;
    } 
    
    this.setState({
      matrix: matrix
    })
  }
  render() {
    const { matrix, pac, score } = this.state;
    return (
      <div>
        <div className="world-container">
          <World matrix={matrix} left={pac.left}/>
        </div>
        <div className="home-footer">
          <div className="lives">
            <img src="images/life.png"/>
            <img src="images/life.png"/>
          </div>
          <div className="score">
            <div id="points">{score}</div>
            <div>points</div>
          </div>
          <div className="projects" onClick={this.props.toggleProjects}>Projects <img src="images/arrow.png"/></div>
        </div>
      </div>
    )
  }
}

export default Home;