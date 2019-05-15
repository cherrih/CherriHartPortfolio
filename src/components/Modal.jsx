import React from 'react';

const Modal = ({ close, toggleProjects }) => (
  <div className="modal-wrapper" onClick={close}>
    <div className="modal">
      <div className="close-modal-btn" onClick={close}><img src="https://s3-us-west-1.amazonaws.com/cherri-portfolio/xBlack.png"/></div>
      <div className="modal-title">
              Welcome
      </div>
      <div className="modal-body">
        <p>
          Use your arrow keys to navigate Pac.
          Power up with "
          <span className="modal-cherri">Cherri</span>
          " to defeat the code bugs.
          Earn 1000 points and win a beer with me!
        </p>
        <p>
          <span onClick={toggleProjects} className="modal-link"> Or just check out my projects.</span>
        </p>
      </div>
    </div>
  </div>
);

export default Modal;
