import React, { useEffect, useState } from 'react';
import './Form.css';

import { AddCategory as AddCategoryMutation } from '../../store/mutations'

function Form({ inputValue = ''}) {
  const AddCategory = AddCategoryMutation()
  const [value, setValue] = useState(inputValue)

  useEffect(() => {
    console.log(AddCategory('test'));
    },[])

  return (
    <div>
      <div className="form-group">
        {value}
        <label htmlFor="categoryName">Category Name</label>
        <input value={value} onChange={(e) => setValue(e.target.value)} type="text" className="form-control input" id="categoryName" aria-describedby="categoryHelp" />
        <small id="categoryHelp" className="form-text text-muted">Enter a name for a new category.</small>
      </div>
      <button onClick={() => AddCategory(value)} type="submit" className="btn btn-primary">Submit</button>
    </div>
  );
};

export default Form;
