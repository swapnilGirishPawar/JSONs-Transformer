import React, { useEffect } from 'react';
import './Career.css';

const Career = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="career-container">
      <h1 className="career-title">Join Us</h1>
      <div className="career-content">
        {/* Content will be added later */}
      </div>
    </div>
  );
};

export default Career; 