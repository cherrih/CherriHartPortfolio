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
        dir: 'Up',
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
        dir: 'Right',
        img: 'codebug',
      },
      pacLives: true,
      g7Lives: true,
      g8Lives: true,
      g9Lives: true,
      scoreColor: 'var(--main-brown)',
      buttonStyle: {
        color: 'var(--main-brown)',
        border: '1px solid var(--main-brown)',
      },
    };
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.deactivateCherriMode = this.deactivateCherriMode.bind(this);
    this.buildMatrix = this.buildMatrix.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  componentWillMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentDidMount() {
    this.buildMatrix();
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

  buildMatrix() {
    const text = [
      '33333333333333333333333333333333333333333333',
      '3333332 Hailing from the land of sheep 33339',
      '333333and kiwis (New Zealand), 1 I am a 3333',
      '3333331 San Francisco-based Full-Stack333333',
      '333333Developer / Creative Technologist.3333',
      '333333Currently working at 1 Pinterest and33',
      '333333accepting freelance projects. Fancy333',
      '3333331 collaborating or interested in333373',
      "333333chatting? 1 Let's talk!333333333333333",
      '33333333333333333333333333333333333333333333',
      '33333333333333333333333333333338333333333333',
    ];

    const matrix = [];
    text.forEach((line) => {
      matrix.push(line.split(''));
    });
    this.setState({
      matrix,
    });
  }

  handleReset() {
    clearInterval(this.interval1);
    clearInterval(this.interval2);
    clearInterval(this.interval3);
    this.buildMatrix();
    this.setState({
      pacLives: true,
      g7Lives: true,
      g8Lives: true,
      g9Lives: true,
      buttonStyle: {
        color: 'var(--main-brown)',
        border: '1px solid var(--main-brown)',
      },
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
        dir: 'Up',
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
        dir: 'Right',
        img: 'codebug',
      },
    });
    const { g7, g8, g9 } = this.state;
    this.interval1 = setInterval(() => this.moveGhost(g7), 500);
    this.interval2 = setInterval(() => this.moveGhost(g8), 500);
    this.interval3 = setInterval(() => this.moveGhost(g9), 500);
  }

  killGhost(g) {
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

  deactivateCherriMode() {
    this.setState({
      cherriMode: false,
      scoreColor: 'var(--main-brown)',
    });
  }

  activateCherriMode() {
    this.setState({
      cherriMode: true,
      scoreColor: 'var(--main-red)',
    });
    setTimeout(this.deactivateCherriMode, 5000);
  }

  killPac() {
    const { toggleDeadMessage } = this.props;
    const { matrix, pac } = this.state;
    matrix[pac.y][pac.x] = '4';
    this.setState({
      pacLives: false,
      score: 0,
      matrix,
    });
    setTimeout(toggleDeadMessage.bind(this), 1000);
    setTimeout(()=> {
      this.setState({
        buttonStyle: {
          color: '#fff',
          backgroundColor: 'var(--main-red)',
          border: '1px solid var(--main-red)',
        },
      });
    }, 1000);
  }

  checkForGhost(y, x) {
    const { matrix } = this.state;
    const piece = matrix[y][x];
    if (piece === '7' || piece === '8' || piece === '9') {
      this.killPac();
      return true;
    }
    return false;
  }

  handleKeyDown(e) {
    e.preventDefault();
    let pieceToEat;
    let score = 0;
    const { showWinMessage } = this.props;
    const {
      cherriMode, matrix, pac, g7, g8, g9, pacLives,
    } = this.state;

    if (pacLives) {
      // move pac left
      if (e.keyCode === 37 && pac.x > 0) {
        pac.left = true;
        if (!cherriMode && this.checkForGhost(pac.y, pac.x - 1)) return;
        matrix[pac.y][pac.x] = '3';
        pac.x -= 1;
        pieceToEat = matrix[pac.y][pac.x];
        matrix[pac.y][pac.x] = '2';
      }
      // move pac right
      if (e.keyCode === 39 && pac.x < matrix[pac.y].length - 1) {
        pac.left = false;
        if (!cherriMode && this.checkForGhost(pac.y, pac.x + 1)) return;
        matrix[pac.y][pac.x] = '3';
        pac.x += 1;
        pieceToEat = matrix[pac.y][pac.x];
        matrix[pac.y][pac.x] = '2';
      }
      if (e.keyCode === 38 && pac.y > 0) {
        // move pac up
        pac.left = false;
        if (!cherriMode && this.checkForGhost(pac.y - 1, pac.x)) return;
        matrix[pac.y][pac.x] = '3';
        pac.y -= 1;
        pieceToEat = matrix[pac.y][pac.x];
        matrix[pac.y][pac.x] = '2';
      }
      if (e.keyCode === 40 && pac.y < matrix.length - 1) {
        // move pac down
        pac.left = false;
        if (!cherriMode && this.checkForGhost(pac.y + 1, pac.x)) return;
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
      }
      if (pieceToEat && pieceToEat !== '3') {
        score += 5;
      }
      this.setState(state => ({
        score: state.score + score,
        matrix,
      }));
      if (this.state.score >= 1000) {
        this.setState({
          buttonStyle: {
            color: '#fff',
            backgroundColor: 'var(--main-red)',
            border: '1px solid var(--main-red)',
          },
        });
        showWinMessage();
      }
    }
  }

  render() {
    const {
      matrix,
      pac,
      score,
      pacLives,
      cherriMode,
      scoreColor,
      buttonStyle,
    } = this.state;
    const { handleReset } = this;
    const { toggleProjects } = this.props;
    const style = { color: scoreColor };
    return (
      <div>
        <div className="score" style={style}>
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
        <div className="reset-button" style={buttonStyle} onClick={handleReset}>Play Again</div>
        </div>
        <div className="home-footer">
          <div className="social">
            <div className="link-arrow-container">
              <a className="link-container" href="https://linkedin.com/in/cherri-hartigan" target="_blank" rel="noopener noreferrer">
                LinkedIn 
                <div className="link-arrow link-arrow-black" />
              </a>
            </div>
            <div className="link-arrow-container">
              <a className="link-container" href="https://github.com/cherrih" target="_blank" rel="noopener noreferrer">
                GitHub
                <div className="link-arrow link-arrow-black" />
              </a>
            </div>
          </div>
          <div className="designed">
            <div className="designed-container">
              <div>
                Design, concept and code by
              </div>
              <div className="link-arrow-container">
                <a href="http://belentenorio.com" target="_blank" rel="noopener noreferrer" className="link-container">
                   Belen Tenorio
                  <div className="link-arrow link-arrow-brown" />
                </a>
              </div>
              <div className="designed-right">and Cherri Hartigan</div>
            </div>
            <div className="link-arrow-container">
              <a href="mailto:bele.tv@gmail.com" className="link-container designed-email">
                Accepting new projects!
                <div className="link-arrow link-arrow-brown" />
              </a>
            </div>
          </div>
          <div className="projects next-arrow-container" onClick={toggleProjects}>
            Projects
            <span className="next-arrow arrow-black" />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
