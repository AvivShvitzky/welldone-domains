import React from 'react';
import './Button.css';

const Button = ({ value }) => {
  return (
    <div className="btn">{value}</div>
  );
};

export default Button;
