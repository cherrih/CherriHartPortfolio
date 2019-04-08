import React from 'react';

class Row extends React.Component {
 
  renderRow(row) {
    let innerHTML = []
    this.props.row.forEach(char => {
      if (char === '1') {
        innerHTML.push(<><div className="cherry"><img src="images/cherry.png"/></div><div className="space"></div></>)
      } else if (char === '2') {
        innerHTML.push(<><div className="space"></div><div id="pac"><img src={this.props.left ? "images/pac-left.png" :"images/pac.png"}/></div><div className="space"></div></>)
      } else if (char === ' ') {
        innerHTML.push(<div className="space"></div>)
      } else if (char === '3') {
        innerHTML.push(<div className="eaten"></div>)
      } else {
        innerHTML.push(<div className="world-char">{char}</div>)
      }        
    })
    return <div>{innerHTML}</div>
  }
  render () {
    return <div>{this.renderRow()}</div>
  }
}

export default Row;