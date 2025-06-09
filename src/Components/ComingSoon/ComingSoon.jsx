import React from 'react';

function ComingSoon() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Coming Soon 🚧</h1>
      <p style={styles.text}>We're working hard to bring this feature to you. Stay tuned!</p>
    </div>
  );
}

const styles = {
  container: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
    color: '#333',
  },
  title: {
    fontSize: '36px',
    marginBottom: '20px',
  },
  text: {
    fontSize: '18px',
  },
};

export default ComingSoon;
