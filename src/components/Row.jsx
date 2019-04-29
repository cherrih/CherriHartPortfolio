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
    const innerHTML = [];
    row.forEach((char, i) => {
      if (char === '1') {
        innerHTML.push(
          <div key={rowIndex + i} className="world-char">
            <div className="cherry"><img src="images/cherry.png" /></div>
            <div className="space" />
          </div>,
        );
      } else if (char === '2') {
        innerHTML.push(
          <div key={rowIndex + i} className="world-char">
            <div className="space" />
            <div id="pac"><img src={left ? 'images/pac-left.png' : 'images/pac.png'} /></div>
            <div className="space" />
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
            <div className="space" />
            <div className="ghost" id="badlogic">
              <img src={`https://s3-us-west-1.amazonaws.com/cherri-portfolio/badlogic_${cherriMode ? 'deadmode' : 'normal'}.png`} />
            </div>
            <div className="space" />
          </div>,
        );
      } else if (char === '8') {
        innerHTML.push(
          <div key={rowIndex + i} className="world-char">
            <div className="space" />
            <div className="ghost" id="syntactic">
              <img src={`https://s3-us-west-1.amazonaws.com/cherri-portfolio/syntacticerror_${cherriMode ? 'deadmode' : 'normal'}.png`} />
            </div>
            <div className="space" />
          </div>,
        );
      } else if (char === '9') {
        innerHTML.push(
          <div key={rowIndex + i} className="world-char">
            <div className="space" />
            <div className="ghost" id="codebug">
              <img src={`https://s3-us-west-1.amazonaws.com/cherri-portfolio/codebug_${cherriMode ? 'deadmode' : 'normal'}.png`} />
            </div>
            <div className="space" />
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
