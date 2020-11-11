// libraries and css
import React from 'react';
import './Select.css'

const Select = ({ data, value, onChangeHandler }) => {
  const options = data.map(option => {
    return <option value={option.name} key={option.name.toString()}>{option.name}</option>
  })
  console.log(data);
  return (
    <select onChange={e => onChangeHandler(e.target.value)} value={value} name="" id="">
      {options}
    </select>
  );
};

export default Select;