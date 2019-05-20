import React from 'react';

const WinMessage = ({ close, toggleProjects }) => (
  <div className="modal-wrapper">
    <div className="modal">
      <div className="close-modal-btn" onClick={close}><img src="https://s3-us-west-1.amazonaws.com/cherri-portfolio/xBlack.png"/></div>
      <div className="modal-title">
        Congrats!
      </div>
      <div className="modal-body">
        <p>
          You won a beer with me! 
          <a href="mailto:cherri.hartigan@gmail.com"> Email me </a>
           to compare schedules or
          <span onClick={toggleProjects} className="modal-link"> check out my projects.</span>
        </p>
      </div>
    </div>
  </div>
);

export default WinMessage;
