import React from 'react';

export const RunFAB = () => {
  return (
    <div className="run-button__container">
      <svg height="90" width="90" className="ring-animation">
        <circle cx="45" cy="45" r="42" />
      </svg>
      <div className="run-button run-button--run-code">
        <div style={{ fontSize: '3rem', fontWeight: 'bold', marginTop: '-8px' }}>
          &#8250;&#8250;&#8250;
        </div>
      </div>
    </div>
  );
};
