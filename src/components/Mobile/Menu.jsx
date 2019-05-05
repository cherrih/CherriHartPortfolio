import React from 'react';

const Menu = ({ toggleMenu }) => {
  return (
    <div className="mobile-menu" onClick={toggleMenu}>
      <div className="mobile-menu-exit">
        <img src="https://s3-us-west-1.amazonaws.com/cherri-portfolio/xBlack.png" onClick={toggleMenu}/>
      </div>
      <div>
        <a href="mailto:cherri.hartigan@gmail.com"><h2>Contact</h2></a>
        <a href="https://drive.google.com/open?id=1iPh_-SpDFIY4QKKT0TAIIhfV6kg45O3l" target="_blank" rel="noopener noreferrer"><h2>Resume</h2></a>
        <a href="https://github.com/cherrih" target="_blank" rel="noopener noreferrer"><h2>GitHub</h2></a>
        <a href="https://linkedin.com/in/cherri-hartigan" target="_blank" rel="noopener noreferrer"><h2>LinkedIn</h2></a>
      </div>
    </div>
  )
}

export default Menu;
