import React from 'react';

const Character = (props) => {
  let charHTML;
  if (props.char === '1') {
    charHTML = <><div className="cherry"><img src="images/cherry.png"/></div><div className="space"></div></>
  } else if (props.char === '2') {
    charHTML = <><div className="space"></div><div id="pac"><img src={this.props.left ? "images/pac-left.png" :"images/pac.png"}/></div><div className="space"></div></>
  } else if (props.char === ' ') {
    charHTML = <div className="space"></div>
  } else if (props.char === '3') {
    charHTML = <div className="eaten"></div>
  } else {
    charHTML = <div className="world-char">{props.char}</div>
  }        
  return (
    <>
    {charHTML}
    </>
  )
}

export default Character;