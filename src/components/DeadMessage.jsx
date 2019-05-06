import React from 'react';

const DeadMessage = ({ close, toggleProjects }) => (
  <div className="modal-wrapper" onClick={close}>
    <div className="modal">
      <div className="close-modal-btn" onClick={close}><img src="https://s3-us-west-1.amazonaws.com/cherri-portfolio/xBlack.png"/></div>
      <div className="modal-title">
        Oh Sh*t!
      </div>
      <div className="modal-body">
        <p>
          You killed Pac! Play again or go
          <span onClick={toggleProjects} className="modal-link"> browse my other projects.</span>
        </p>
      </div>
    </div>
  </div>
);

export default DeadMessage;
