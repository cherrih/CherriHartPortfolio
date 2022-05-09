/* eslint-disable class-methods-use-this */
import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

class Row extends React.Component {
  renderRow(row, rowIndex, left, pacLives, cherriMode) {
    const url = 'https://s3-us-west-1.amazonaws.com/cherri-portfolio/';
    const innerHTML = [];
    row.forEach((char) => {
      const id = uuidv4();
      if (char === '1') {
        innerHTML.push(
          <div key={rowIndex + id} className="world-char">
            <div className="cherry">
              <img src={`${url}cherris.svg`} alt="cherry" />
            </div>
          </div>,
        );
      } else if (char === '2') {
        innerHTML.push(
          <div key={rowIndex + id} className="world-char">
            <div id="pac">
              <img src={left ? `${url}pac-left.svg` : `${url}pac.svg`} alt="pacman facing left" />
            </div>
          </div>,
        );
      } else if (char === ' ') {
        innerHTML.push(
          <div key={rowIndex + id} className="world-char">
            <div className="space" />
            {' '}
          </div>,
        );
      } else if (char === '3') {
        innerHTML.push(
          <div key={rowIndex + id} className="world-char">
            <div className="eaten" />
          </div>,
        );
      } else if (char === '4') {
        innerHTML.push(
          <div key={rowIndex + id} className="world-char">
            <div id="pacdies">
              <img src={`${url}pacmandies.gif`} alt="pacman dying" />
            </div>
          </div>,
        );
      } else if (char === '7') {
        innerHTML.push(
          <div key={rowIndex + id} className="world-char">
            <div className="ghost" id="badlogic">
              <img
                src={`${url}badlogic_${cherriMode ? 'deadmode' : 'normal'}.svg`}
                alt={`bad logic bug ${cherriMode ? 'deadmode' : 'normal'}`}
              />
            </div>
          </div>,
        );
      } else if (char === '8') {
        innerHTML.push(
          <div key={rowIndex + id} className="world-char">
            <div className="ghost" id="syntactic">
              <img
                src={`${url}syntacticerror_${
                  cherriMode ? 'deadmode' : 'normal'
                }.svg`}
                alt={`syntactic error ${
                  cherriMode ? 'deadmode' : 'normal'
                }`}
              />
            </div>
          </div>,
        );
      } else if (char === '9') {
        innerHTML.push(
          <div key={rowIndex + id} className="world-char">
            <div className="ghost" id="codebug">
              <img
                src={`${url}codebug_${cherriMode ? 'deadmode' : 'normal'}.svg`}
                alt={`code bug ${cherriMode ? 'deadmode' : 'normal'}`}
              />
            </div>
          </div>,
        );
      } else {
        innerHTML.push(
          <div key={rowIndex + id} className="world-char">
            <div className="world-letter">{char}</div>
          </div>,
        );
      }
    });
    return <div>{innerHTML}</div>;
  }

  render() {
    const { renderRow } = this;
    const {
      row, rowIndex, left, pacLives, cherriMode,
    } = this.props;
    return <>{renderRow(row, rowIndex, left, pacLives, cherriMode)}</>;
  }
}

Row.propTypes = {
  row: PropTypes.arrayOf(PropTypes.string).isRequired,
  rowIndex: PropTypes.number.isRequired,
  left: PropTypes.bool.isRequired,
  pacLives: PropTypes.bool.isRequired,
  cherriMode: PropTypes.bool.isRequired,
};

export default Row;
