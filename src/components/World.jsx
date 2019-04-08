import React from 'react';
import Row from './Row.jsx'

const World = (props) => {
  return (
    <div id="world" tabIndex="0" onKeyDown={props.handleKeyDown}>
    {props.matrix.map(row => <Row row={row} key={row} left={props.left}/>)}
    </div>
  )
}

export default World;