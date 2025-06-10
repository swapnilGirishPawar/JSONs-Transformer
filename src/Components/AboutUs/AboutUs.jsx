import React, { useEffect } from 'react';
import './AboutUs.css';

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="aboutus-container">
      <h1 className="aboutus-title">Who Are We</h1>
      <div className="aboutus-content">
        {/* Content will be added later */}
      </div>
    </div>
  );
};

export default AboutUs; 