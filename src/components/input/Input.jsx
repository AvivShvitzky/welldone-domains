// libraries and css
import React from 'react';
import PropTypes from 'prop-types';
import './Input.css';

const Input = ({ category = {}, label = '', onChangeHandler }) => {
  return (
    <fieldset>
      <label htmlFor="categoryName">{label}</label>
      <input 
        value={category.name} 
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
  category: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  onChangeHandler: PropTypes.func.isRequired,
}

export default Input;
