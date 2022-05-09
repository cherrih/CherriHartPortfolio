import React from 'react';
import PropTypes from 'prop-types';

const Menu = ({ toggleMenu }) => (
  <div className="mobile-menu">
    <div className="mobile-menu-exit">
      <img
        src="https://s3-us-west-1.amazonaws.com/cherri-portfolio/xBlack.svg"
        onClick={toggleMenu}
        alt="exit"
      />
    </div>
    <div>
      <a href="mailto:cherri.hartigan@gmail.com">
        <h2>Contact</h2>
      </a>
      <a
        href="https://drive.google.com/file/d/1QSqtAUQOSEjXy6E26ANiOwHmelXt6GfZ/view"
        target="_blank"
        rel="noopener noreferrer"
      >
        <h2>Resume</h2>
      </a>
      <a
        href="https://github.com/cherrih"
        target="_blank"
        rel="noopener noreferrer"
      >
        <h2>GitHub</h2>
      </a>
      <a
        href="https://linkedin.com/in/cherri-hartigan"
        target="_blank"
        rel="noopener noreferrer"
      >
        <h2>LinkedIn</h2>
      </a>
    </div>
  </div>
);

Menu.propTypes = {
  toggleMenu: PropTypes.func.isRequired,
}

export default Menu;
