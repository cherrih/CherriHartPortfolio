/* eslint-disable react/no-array-index-key */
/* eslint-disable class-methods-use-this */
import React from 'react';

class Row extends React.Component {
  renderRow(
    row,
    rowIndex,
    left,
    pacLives,
    cherriMode,
  ) {
    const url = 'https://s3-us-west-1.amazonaws.com/cherri-portfolio/';
    const innerHTML = [];
    row.forEach((char, i) => {
      if (char === '1') {
        innerHTML.push(
          <div key={rowIndex + i} className="world-char">
            <div className="cherry"><img src={`${url}cherris.png`} /></div>
            <div className="space" />
          </div>,
        );
      } else if (char === '2') {
        innerHTML.push(
          <div key={rowIndex + i} className="world-char">
            <div id="pac"><img src={left ? `${url}pac-left.png` : `${url}pac.png`} /></div>
          </div>,
        );
      } else if (char === ' ') {
        innerHTML.push(
          <div key={rowIndex + i} className="world-char">
            <div className="space" />
            {' '}
          </div>,
        );
      } else if (char === '3') {
        innerHTML.push(<div key={rowIndex + i} className="world-char"><div className="eaten" /></div>);
      } else if (char === '7') {
        innerHTML.push(
          <div key={rowIndex + i} className="world-char">
            <div className="ghost" id="badlogic">
              <img src={`${url}badlogic_${cherriMode ? 'deadmode' : 'normal'}.png`} />
            </div>
          </div>,
        );
      } else if (char === '8') {
        innerHTML.push(
          <div key={rowIndex + i} className="world-char">
            <div className="ghost" id="syntactic">
              <img src={`${url}syntacticerror_${cherriMode ? 'deadmode' : 'normal'}.png`} />
            </div>
          </div>,
        );
      } else if (char === '9') {
        innerHTML.push(
          <div key={rowIndex + i} className="world-char">
            <div className="ghost" id="codebug">
              <img src={`${url}codebug_${cherriMode ? 'deadmode' : 'normal'}.png`} />
            </div>
          </div>,
        );
      } else {
        innerHTML.push(<div key={rowIndex + i} className="world-char"><div className="world-letter">{char}</div></div>);
      }
    });
    return <div>{innerHTML}</div>;
  }

  render() {
    const { renderRow } = this;
    const {
      row,
      rowIndex,
      left,
      pacLives,
      cherriMode,
    } = this.props;
    return (
      <>
        {renderRow(
          row,
          rowIndex,
          left,
          pacLives,
          cherriMode,
        )}
      </>
);
  }
}

export default Row;
