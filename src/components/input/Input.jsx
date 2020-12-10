// libraries and css
import React from 'react';
import PropTypes from 'prop-types';
import './Input.css';

const Input = ({ value = '', label = '', onChangeHandler }) => {
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

Input.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.number.isRequired,
  ]),
  label: PropTypes.string.isRequired,
  onChangeHandler: PropTypes.func.isRequired,
}

export default Input;
