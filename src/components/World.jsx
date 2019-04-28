import React from 'react';
import Row from './Row.jsx';

const World = ({ matrix, left }) => (
  <div id="world">
    {matrix.map((row, i) => <Row row={row} key={`row${i}`} rowIndex={i} left={left} />)}
  </div>
);


export default World;
