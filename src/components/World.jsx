/* eslint-disable react/prop-types */
import React from 'react';
import Row from './Row.jsx';

const World = ({
  matrix,
  left,
  pacLives,
  cherriMode,
}) => (
  <div id="world">
    {matrix.map((row, i) => (
      <Row
        row={row}
        key={`row${i}`} 
        rowIndex={i}
        left={left}
        pacLives={pacLives}
        cherriMode={cherriMode}
      />
))
    }
  </div>
);

export default World;
