import React from 'react';

const DeadMessage = ({ close }) => (
  <div className="modal-wrapper" onClick={close}>
    <div className="modal">
      <div className="close-modal-btn" onClick={close}>×</div>
      <div className="modal-title">
        Oh Sh*t!
      </div>
      <div className="modal-body">
        <p>
          You killed Pac! <a>Play again</a> or go browse my other projects.
        </p>
      </div>
    </div>
  </div>
);

export default DeadMessage;
