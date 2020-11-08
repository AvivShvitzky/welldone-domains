import React, { useState, useEffect } from 'react';
import './Form.css';

import { 
  TOAST_SUCCESS, 
  TOAST_WARNING,
  NEW_CATEGORY_SUCCESS,
  NEW_CATEGORY_FAIL,
  CREATE_TOAST,
  DELETE_TOAST
} from '../toast/Toast.consts'
import useToast from '../toast/Toast'


function Form({ clickHandler, inputValue = ''}) {
  const [value, setValue] = useState(inputValue)
  const toast = useToast()

  // clean
  useEffect(() => {
    return () => {
      toast(DELETE_TOAST)
    };
  }, []);

  const onSubmitHandler = e => {
    e.preventDefault();
    const addingSucceeded = clickHandler(value);
    // trigger a toast
    if (addingSucceeded) {
      toast(CREATE_TOAST, TOAST_SUCCESS, NEW_CATEGORY_SUCCESS)
    } else {
      toast(CREATE_TOAST, TOAST_WARNING, NEW_CATEGORY_FAIL)
    }
    // clean data
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
