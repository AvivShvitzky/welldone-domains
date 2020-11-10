// libraries and css
import React from 'react';
import './Button.css'

const Button = ({ children, onClickHandler }) => {
  return (
    <button 
      className="btn btn-primary"
      onClick={() => onClickHandler()}
    >
      {children}
    </button>
  );
};

export default Button;
