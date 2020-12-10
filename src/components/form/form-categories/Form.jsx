// libraries and css
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import '../Form.css'

// components
import Input from '../../input/Input'

// consts
import { 
  TOAST_SUCCESS, 
  EDIT_CATEGORY_SUCCESS,
  CREATE_TOAST,
  DELETE_TOAST
} from '../../toast/Toast.consts'

import useToast from '../../toast/Toast'

function Form({ clickHandler, currentCategory = {} }) {
  const [category, setCategory] = useState(currentCategory)
  const toast = useToast()
  
  // clean up
  useEffect(() => {
    return () => {
      toast(DELETE_TOAST)
    };
  }, []);
  
  const onChangeHandler = value => {
    console.log(category);
    const updatedCategory = {...category, name: value}
    setCategory(updatedCategory)
  }
  
  const onSubmitHandler = e => {
    e.preventDefault();
    clickHandler(category)
    toast(CREATE_TOAST, TOAST_SUCCESS, EDIT_CATEGORY_SUCCESS)
  }
  
  return (
    <form>
      <div className="form-group">
        <Input 
          category={category}
          label="Category Name"
          onChangeHandler={onChangeHandler}
          />
        <small id="categoryHelp" className="form-text text-muted">Enter a name for a category.</small>
      </div>
      <button onClick={onSubmitHandler} type="submit" className="btn btn-primary">Submit</button>
    </form>
  );
};

Form.propTypes = {
  clickHandler: PropTypes.func.isRequired,
  currentCategory: PropTypes.object.isRequired
}

export default Form;
