import React from 'react';
import './Input.css';

const Input = ({ value }) => {
  return (
    <input type="text" className="input" value={value}/>
  );
};

export default Input;
