import React from 'react';

const Container = ({ children }) => {
  return (
    <div
      style={{
        position: 'relative',
        flexShrink: 0,
        overflow: 'hidden',
        padding: '3rem',
      }}
    >
      {children}
    </div>
  );
};

export default Container;
