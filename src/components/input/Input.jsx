// libraries and css
import React from 'react';
import './Input.css';

const Input = ({ value, label, onChangeHandler }) => {
  return (
    <fieldset>
      <label htmlFor="categoryName">{label}</label>
      <input 
        value={value} 
        onChange={e => onChangeHandler(e.target.value)} 
        type="text" 
        className="form-control input" 
        id="categoryName" 
        aria-describedby="categoryHelp" 
      />
    
    </fieldset>
  );
};

export default Input;
