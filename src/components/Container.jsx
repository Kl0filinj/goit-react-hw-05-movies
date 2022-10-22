import React from 'react';

const Container = ({ children }) => {
  return (
    <div
      style={{
        maxWidth: '100vw',
        padding: '15px',
        backgroundColor: '#2c2c2c',
      }}
    >
      {children}
    </div>
  );
};

export default Container;
