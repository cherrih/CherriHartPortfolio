import React from 'react';
import Row from './Row.jsx'

const World = (props) => {
  return (
    <div id="world" >
    {props.matrix.map((row, i) => <Row row={row} key={`row${i}`} rowIndex={i} left={props.left}/>)}
    </div>
  )
}

export default World;