import React, { useState, useEffect } from 'react';
import './Statistics.css';

const Statistics = () => {
  const [counts, setCounts] = useState({
    installs: 0,
    customers: 0,
    reviews: 0,
    problems: 0
  });

  const targetValues = {
    installs: 784,
    customers: 1628,
    reviews: 2415,
    problems: 1982
  };

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const interval = 20; // Update every 20ms
    const steps = duration / interval;
    
    const timer = setInterval(() => {
      setCounts(prevCounts => {
        const newCounts = { ...prevCounts };
        let allComplete = true;

        Object.keys(targetValues).forEach(key => {
          if (prevCounts[key] < targetValues[key]) {
            const increment = Math.ceil(targetValues[key] / steps);
            newCounts[key] = Math.min(prevCounts[key] + increment, targetValues[key]);
            allComplete = false;
          }
        });

        if (allComplete) {
          clearInterval(timer);
        }

        return newCounts;
      });
    }, interval);

    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num, isInstalls = false) => {
    if (isInstalls) {
      return num.toString();
    }
    return num.toString().padStart(4, '0');
  };

  return (
    <div className="statistics-container">
      <div className="stat-item">
        <div className="number-roll">
          {formatNumber(counts.installs, true).split('').map((digit, index) => (
            <span key={index} className="digit">{digit}</span>
          ))}
        </div>
        <p>Install and Upgrade</p>
      </div>
      <div className="stat-item">
        <div className="number-roll">
          {formatNumber(counts.customers).split('').map((digit, index) => (
            <span key={index} className="digit">{digit}</span>
          ))}
        </div>
        <p>Happy Customers</p>
      </div>
      <div className="stat-item">
        <div className="number-roll">
          {formatNumber(counts.reviews).split('').map((digit, index) => (
            <span key={index} className="digit">{digit}</span>
          ))}
        </div>
        <p>Reviews Done</p>
      </div>
      <div className="stat-item">
        <div className="number-roll">
          {formatNumber(counts.problems).split('').map((digit, index) => (
            <span key={index} className="digit">{digit}</span>
          ))}
        </div>
        <p>Problems Solved</p>
      </div>
    </div>
  );
};

export default Statistics; 