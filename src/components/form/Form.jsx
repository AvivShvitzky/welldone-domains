import React from 'react';
import './Form.css';

const Form = ({ inputValue }) => {
  return (
    <form>
      <div class="form-group">
        <label for="categoryName">Category Name</label>
        <input value={inputValue} type="text" class="form-control input" id="categoryName" aria-describedby="categoryHelp" />
        <small id="categoryHelp" class="form-text text-muted">Enter a name for a new category.</small>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  );
};

export default Form;
