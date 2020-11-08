import React, { useState } from 'react';
import './Form.css';

function Form({ clickHandler, inputValue = ''}) {
  const [value, setValue] = useState(inputValue)

  const onSubmitHandler = e => {
    e.preventDefault();
    clickHandler(value);
    setValue('')
  }

  return (
    <form>
      <div className="form-group">
        <label htmlFor="categoryName">Category Name</label>
        <input value={value} onChange={(e) => setValue(e.target.value)} type="text" className="form-control input" id="categoryName" aria-describedby="categoryHelp" />
        <small id="categoryHelp" className="form-text text-muted">Enter a name for a new category.</small>
      </div>
      <button onClick={onSubmitHandler} type="submit" className="btn btn-primary">Submit</button>
    </form>
  );
};

export default Form;
