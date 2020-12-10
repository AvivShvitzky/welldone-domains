// libraries and css
import React, { useEffect, useState } from 'react';

// components
import Form from '../../../components/form/form-categories/Form'

// consts
import { EDIT_CATEGORY, ENTITY_CATEGORIES } from '../../../consts'

// store
import { editCategory } from '../../../store/categories/actions'
import { useDispatch, useSelector } from 'react-redux'


function EditCategory() {
  const currentCategory = useSelector(state => state.context.currentPickedItem)
  const dispatch = useDispatch()

  const editClickHandler = updatedCategory => {
    dispatch(editCategory(updatedCategory))
    console.log(updatedCategory);
  }

  return (
    <div className="categories">
      <div className="page__content">
        <Form 
          clickHandler={editClickHandler}
          currentCategory={currentCategory}
        />
      </div>
    </div>
  );
};

export default EditCategory;
