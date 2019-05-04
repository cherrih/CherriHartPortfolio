import React from 'react';

const WinMessage = ({ close, toggleProjects }) => (
  <div className="modal-wrapper">
    <div className="modal">
      <div className="close-modal-btn" onClick={close}>×</div>
      <div className="modal-title">
        Congrats!
      </div>
      <div className="modal-body">
        <p>
          You won a beer with me! 
          <a href="mailto:cherri.hartigan@gmail.com"> Email me </a>
           to set up a time to imbibe or go
          <span onClick={toggleProjects} className="modal-link"> browse my other projects.</span>
        </p>
      </div>
    </div>
  </div>
);

export default WinMessage;
