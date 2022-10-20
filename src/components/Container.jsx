import React from 'react';

const Container = ({ children }) => {
  return (
    <div
      style={{
        maxWidth: '100vw',
        padding: '15px',
      }}
    >
      {children}
    </div>
  );
};

export default Container;
