import React from 'react';

const Link = ({ active, onClick, children }) => (
  <button className="btn btn-primary"
    onClick={onClick}
    disabled={active}
    style={{
      marginLeft: '4px'
    }}
  >
    {children}
  </button>
);

export default Link;