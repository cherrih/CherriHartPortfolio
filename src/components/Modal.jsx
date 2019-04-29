import React from 'react';

const Modal = ({ close }) => (
  <div className="modal-wrapper" onClick={close}>
    <div className="modal">
      <div className="close-modal-btn" onClick={close}>×</div>
      <div className="modal-title">
              Welcome
      </div>
      <div className="modal-body">
        <p>
          Use your arrow keys to navigate Pac.
          Power up with "
          <span className="modal-cherri">Cherri</span>
          " to defeat the code bugs.
          Earn 1000 points and score a beer with me!
          Otherwise click through and see my projects.
        </p>
      </div>
    </div>
  </div>
);

export default Modal;
