import React from 'react';

const Character = ({ char, left }) => {
  let charHTML;
  if (char === '1') {
    charHTML = (
      <>
        <div className="cherry"><img src="images/cherry.png" /></div>
        <div className="space" />
      </>
    );
  } else if (char === '2') {
    charHTML = (
      <>
        <div className="space" />
        <div id="pac"><img src={left ? 'images/pac-left.png' : 'images/pac.png'} /></div>
        <div className="space" />
      </>
    );
  } else if (char === ' ') {
    charHTML = <div className="space" />;
  } else if (char === '3') {
    charHTML = <div className="eaten" />;
  } else {
    charHTML = <div className="world-char">{char}</div>;
  }
  return (
    <>
      {charHTML}
    </>
  );
};

export default Character;
