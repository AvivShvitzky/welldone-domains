// libraries and css
import React from 'react';
import './Button.css';

const Button = ({ children }) => {
  return (
    <button className="btn btn-primary">{children}</button>
  );
};

export default Button;
