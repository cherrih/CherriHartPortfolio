import React from 'react';

const Modal = (props) => {
    return (
      <div className="modal-wrapper" onClick={props.close}>
          <div className="modal">
              <div className="modal-header">
                <h3>WELCOME INTREPID TRAVELER!</h3>
                <span className="close-modal-btn" onClick={props.close}>×</span>
              </div>
              <div className="modal-body">
                <p>
                  Use your arrow keys to navigate Pac. Power up with "Cherri" to defeat the code bugs.
                </p>
                <p>
                  Earn 1000 points and score yourself a beer on me!
                </p>
                <div className="modal-btn-play"onClick={props.close}>PLAY</div>
              </div>
          </div>
      </div>
    )
}

export default Modal;
