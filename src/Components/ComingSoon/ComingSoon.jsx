import React from 'react';
import './ComingSoon.css';

const ComingSoon = () => {
  return (
    <div className="coming-soon-container">
      <div className="coming-soon-content">
        <div className="construction-icon">
          <i className="fas fa-hard-hat"></i>
          <i className="fas fa-tools"></i>
          <i className="fas fa-cogs"></i>
        </div>
        <h1>Coming Soon</h1>
        <p>We're working hard to bring you our Spare Parts section.</p>
        <p>Please check back later for updates.</p>
        <div className="progress-bar">
          <div className="progress"></div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon; 