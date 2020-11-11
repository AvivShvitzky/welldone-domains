// libraries and css
import React, { useState, useEffect } from 'react';
import '../Form.css'

// components
import Input from '../../input/Input'

// consts
import { 
  TOAST_SUCCESS, 
  TOAST_WARNING,
  NEW_CATEGORY_SUCCESS,
  NEW_CATEGORY_FAIL,
  EDIT_CATEGORY_SUCCESS,
  EDIT_CATEGORY_FAIL,
  CREATE_TOAST,
  DELETE_TOAST
} from '../../toast/Toast.consts'
import { NEW_CATEGORY, EDIT_CATEGORY } from '../../../consts'

import useToast from '../../toast/Toast'

function Form({ clickHandler, currentPage, categoryName}) {
  const [value, setValue] = useState('')
  const toast = useToast()

  // initial
  useEffect(() => {
    if (categoryName) {
      setValue(categoryName)
    }
  },[categoryName])

  // clean up
  useEffect(() => {
    return () => {
      toast(DELETE_TOAST)
    };
  }, []);

  const onSubmitHandler = e => {
    e.preventDefault();
    const success = clickHandler(value);
    const toastTuple = () => {
      if (currentPage === NEW_CATEGORY) {
        return [NEW_CATEGORY_SUCCESS, NEW_CATEGORY_FAIL]
      } else if (EDIT_CATEGORY) {
        return [EDIT_CATEGORY_SUCCESS, EDIT_CATEGORY_FAIL]
      }
    }
    // trigger a toast
    if (success) {
      toast(CREATE_TOAST, TOAST_SUCCESS, toastTuple()[0])
    } else {
      toast(CREATE_TOAST, TOAST_WARNING, toastTuple()[1])
    }
    // clean data
    setValue('')
  }
 
  return (
    <form>
      <div className="form-group">
        <Input 
          value={value}
          label="Category Name"
          onChangeHandler={setValue}
        />
        <small id="categoryHelp" className="form-text text-muted">Enter a name for a category.</small>
      </div>
      <button onClick={onSubmitHandler} type="submit" className="btn btn-primary">Submit</button>
    </form>
  );
};

export default Form;
