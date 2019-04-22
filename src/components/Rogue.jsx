import React from 'react';

const Rogue = ({ hideProject }) => {
  return (
    <div>
      <div className="projects-footer" onClick={hideProject}>Back</div>
    </div>
  )
}

export default Rogue;
