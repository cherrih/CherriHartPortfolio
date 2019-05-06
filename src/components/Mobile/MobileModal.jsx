import React from 'react';

const MobileModal = ({ close }) => (
  <div className="mobile-modal-wrapper" onClick={close}>
    <div className="mobile-modal">
      <div className="close-modal-btn" onClick={close}><img src="https://s3-us-west-1.amazonaws.com/cherri-portfolio/xBlack.png"/></div>
      <div className="mobile-modal-text">
        <div className="mobile-modal-title">
          Welcome!
        </div>
        <div className="mobile-modal-body">
          <p>
            To play the exclusive Pac game and for a chance to win a special price, please view this site on a bigger screen. Otherwise, scroll down to peruse my projects.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default MobileModal;
