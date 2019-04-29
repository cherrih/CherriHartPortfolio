/* eslint-disable class-methods-use-this */
import React from 'react';
import World from './World.jsx';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      matrix: [],
      cherriMode: false,
      pac: {
        x: 6,
        y: 1,
        left: false,
      },
      score: 0,
      g7: {
        x: 42,
        y: 7,
        n: '7',
        dir: 'Left',
        img: 'badlogic',
      },
      g8: {
        x: 31,
        y: 10,
        n: '8',
        dir: 'Left',
        img: 'syntacticerror',
      },
      g9: {
        x: 43,
        y: 1,
        n: '9',
        dir: 'Left',
        img: 'codebug',
      },
      pacLives: true,
      g7Lives: true,
      g8Lives: true,
      g9Lives: true,
    };
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  componentWillMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentDidMount() {
    const text = ['33333333333333333333333333333333333333333333',
      '3333332 Hailing from 1 the land of3333333339',
      '333333sheep and kiwis (New Zealand),33333333',
      '333333I am a San Francisco-based 13333333333',
      '333333Full-Stack developer, Creator and33333',
      '333333Collaborator. 1 Currently seeking a333',
      '333333user-focused Creative Technologist /33',
      '333333Front-End Developer role.3133333333373',
      '333333Fancy a collaboration or interested333',
      "333333in chatting? Let's talk!33333333333333",
      '33333333333333333333333333333338333333333333'];

    const matrix = [];
    text.forEach((line) => {
      matrix.push(line.split(''));
    });
    this.setState({
      matrix,
    });
    const { g7, g8, g9 } = this.state;
    this.interval1 = setInterval(() => this.moveGhost(g7), 500);
    this.interval2 = setInterval(() => this.moveGhost(g8), 500);
    this.interval3 = setInterval(() => this.moveGhost(g9), 500);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
    clearInterval(this.interval1);
    clearInterval(this.interval2);
    clearInterval(this.interval3);
  }

  getRandomDirection() {
    const dir = ['Left', 'Right', 'Up', 'Down'];
    const i = Math.floor(Math.random() * (3 + 1));
    return dir[i];
  }

  getNewDirection(g) {
    g.dir = this.getRandomDirection();
    this.moveGhost(g);
  }

  killGhost(g) {
    const { matrix } = this.state;
    const name = `g${g.n}Lives`;
    this.setState({
      [name]: false,
    });
  }

  moveRight(g) {
    const { matrix, cherriMode } = this.state;
    if (g.x < matrix[g.y].length - 1) {
      const nextPiece = matrix[g.y][g.x + 1];
      if (nextPiece === '3') {
        matrix[g.y][g.x] = '3';
        g.x += 1;
        matrix[g.y][g.x] = g.n;
      } else if (nextPiece === '2' && !cherriMode) {
        this.killPac();
        this.getNewDirection(g);
      } else {
        this.getNewDirection(g);
      }
    } else {
      this.getNewDirection(g);
    }
  }

  moveLeft(g) {
    const { matrix, cherriMode } = this.state;
    if (g.x > 0) {
      const nextPiece = matrix[g.y][g.x - 1];
      if (nextPiece === '3') {
        matrix[g.y][g.x] = '3';
        g.x -= 1;
        matrix[g.y][g.x] = g.n;
      } else if (nextPiece === '2' && !cherriMode) {
        this.killPac();
        this.getNewDirection(g);
      } else {
        this.getNewDirection(g);
      }
    } else {
      this.getNewDirection(g);
    }
  }

  moveUp(g) {
    const { matrix, cherriMode } = this.state;
    if (g.y > 0) {
      const nextPiece = matrix[g.y - 1][g.x];
      if (nextPiece === '3') {
        matrix[g.y][g.x] = '3';
        g.y -= 1;
        matrix[g.y][g.x] = g.n;
      } else if (nextPiece === '2' && !cherriMode) {
        this.killPac();
        this.getNewDirection(g);
      } else {
        this.getNewDirection(g);
      }
    } else {
      this.getNewDirection(g);
    }
  }

  moveDown(g) {
    const { matrix, cherriMode } = this.state;
    if (g.y < matrix.length - 1) {
      const nextPiece = matrix[g.y + 1][g.x];
      if (nextPiece === '3') {
        matrix[g.y][g.x] = '3';
        g.y += 1;
        matrix[g.y][g.x] = g.n;
      } else if (nextPiece === '2' && !cherriMode) {
        this.killPac();
        this.getNewDirection(g);
      } else {
        this.getNewDirection(g);
      }
    } else {
      this.getNewDirection(g);
    }
  }

  moveGhost(g) {
    const dir = `move${g.dir}`;
    const isAlive = `g${g.n}Lives`;
    if (this.state[isAlive]) {
      this[dir](g);
      this.forceUpdate();
    }
  }

  toggleCherriMode() {
    this.setState(state => ({
      cherriMode: !state.cherriMode,
    }));
  }

  activateCherriMode() {
    this.toggleCherriMode();
    setTimeout(this.toggleCherriMode.bind(this), 5000);
    // new images for ghosts
  }

  killPac() {
    const { matrix, pac } = this.state;
    matrix[pac.y][pac.x] = '4';
    // setTimeout(() => { matrix[pac.y][pac.x] = '3' }, 600);
    this.setState({
      pacLives: false,
      score: 0,
    });
  }

  handleKeyDown(e) {
    e.preventDefault();
    let pieceToEat;
    let score = 0;
    const {
      cherriMode, matrix, pac, g7, g8, g9, pacLives,
    } = this.state;
    if (pacLives) {
      if (e.keyCode === 37 && pac.x > 0) {
        // move pac left
        pac.left = true;
        matrix[pac.y][pac.x] = '3';
        pac.x -= 1;
        pieceToEat = matrix[pac.y][pac.x];
        matrix[pac.y][pac.x] = '2';
      }
      // move pac right
      if (e.keyCode === 39 && pac.x < matrix[pac.y].length - 1) {
        pac.left = false;
        matrix[pac.y][pac.x] = '3';
        pac.x += 1;
        pieceToEat = matrix[pac.y][pac.x];
        matrix[pac.y][pac.x] = '2';
      }
      if (e.keyCode === 38 && pac.y > 0) {
        // move pac up
        pac.left = false;
        matrix[pac.y][pac.x] = '3';
        pac.y -= 1;
        pieceToEat = matrix[pac.y][pac.x];
        matrix[pac.y][pac.x] = '2';
      }
      if (e.keyCode === 40 && pac.y < matrix.length - 1) {
        // move pac down
        pac.left = false;
        matrix[pac.y][pac.x] = '3';
        pac.y += 1;
        pieceToEat = matrix[pac.y][pac.x];
        matrix[pac.y][pac.x] = '2';
      }
      if (pieceToEat === '1') {
        score += 100;
        this.activateCherriMode();
      } else if (cherriMode) {
        if (pieceToEat === '7') {
          score += 250;
          this.killGhost(g7);
        } else if (pieceToEat === '8') {
          score += 250;
          this.killGhost(g8);
        } else if (pieceToEat === '9') {
          score += 250;
          this.killGhost(g9);
        }
      } else if (pieceToEat && pieceToEat !== '3') {
        score += 5;
      }
      this.setState(state => ({
        score: state.score + score,
        matrix,
      }));
    }
  }

  render() {
    const {
      matrix,
      pac,
      score,
      pacLives,
      cherriMode,
    } = this.state;
    const { toggleProjects } = this.props;
    return (
      <div>
        <div className="score">
          <div id="points">{score}</div>
          <div id="points-text">points</div>
        </div>
        <div className="world-container">
          <World
            matrix={matrix}
            left={pac.left}
            pacLives={pacLives}
            cherriMode={cherriMode}
          />
        </div>
        <div className="home-footer">
          <div className="social">
            <div><a href="https://linkedin.com/in/cherri-hartigan" target="_blank" rel="noopener noreferrer">LinkedIn</a></div>
            <div><a href="https://github.com/cherrih" target="_blank" rel="noopener noreferrer">GitHub</a></div>
          </div>
          <div className="designed">
            <div>
              design and concept by
              <a href="http://belentenorio.com" target="_blank" rel="noopener noreferrer"> Belen Tenorio</a>
            </div>
            <div>code by Cherri Hartigan</div>
          </div>
          <div className="projects" onClick={toggleProjects}>
            Projects
            <img src="images/arrow.png" />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
