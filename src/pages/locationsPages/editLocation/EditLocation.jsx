// libraries and css
import React, { useEffect, useState } from 'react';

// components
import Form from '../../../components/form/form-locations/Form'

// consts
import { EDIT_LOCATION, ENTITY_LOCATIONS } from '../../../consts'

// store
import { editLocation } from '../../../store/features/locations'
import { useDispatch, useSelector } from 'react-redux'

function EditCategory() {
  const currentLocation = useSelector(state => state.context.currentPickedItem)
  const categories = useSelector(state => state.categories)
  const dispatch = useDispatch()

  const editClickHandler = updatedLocation => {
    return dispatch(editLocation(updatedLocation))
  }

  return (
    <div className="categories">
      <div className="page__content">
        <Form 
          clickHandler={editClickHandler}
          location={currentLocation}
          categories={categories}
        />
      </div>
    </div>
  );
};

export default EditCategory;
