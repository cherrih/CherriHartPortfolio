/* eslint-disable react/prop-types */
import React from 'react';
import { v4 as uuidv4 } from 'uuid';
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
        key={`row${uuidv4()}`}
        rowIndex={i}
        left={left}
        pacLives={pacLives}
        cherriMode={cherriMode}
      />
    ))}
  </div>
);

export default World;
