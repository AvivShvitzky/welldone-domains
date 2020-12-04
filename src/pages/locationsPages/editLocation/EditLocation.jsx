// libraries and css
import React, { useEffect, useState } from 'react';

// components
import Form from '../../../components/form/form-locations/Form'

// consts
import { EDIT_LOCATION, ENTITY_LOCATIONS, ACTION_EDIT } from '../../../consts'

// store
import { useRecoilState, useRecoilValue } from "recoil";
import { 
  currentPage as currentPageAtom, 
  categories as categoriesAtom, 
  currPickedLocation 
} from '../../../store/atoms'
import { useEntityReducer } from '../../../store/mutations'


function EditCategory() {
  const [currentPage, setCurrentPage] = useRecoilState(currentPageAtom);
  const location = useRecoilValue(currPickedLocation);
  const categories = useRecoilValue(categoriesAtom);
  const editLocation = useEntityReducer(ACTION_EDIT)

  useEffect(() => {
    setCurrentPage(EDIT_LOCATION)
  }, [])

  const editClickHandler = newLocationName => {
    return editLocation(location.name, newLocationName)
  }

  return (
    <div className="categories">
      <div className="page__content">
        <Form 
          clickHandler={editClickHandler}
          currentPage={currentPage}
          location={location}
          categories={categories}
        />
      </div>
    </div>
  );
};

export default EditCategory;
