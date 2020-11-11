// libraries and css
import React, { useEffect, useState } from 'react';

// components
import Form from '../../../components/form/form-locations/Form'

// consts
import { EDIT_LOCATION } from '../../../consts'

// store
import { useRecoilState } from "recoil";
import { currentPage as currentPageAtom, currPickedLocation } from '../../../store/atoms'
import { useEditLocation } from '../../../store/mutations'


function EditCategory(props) {
  const [currentPage, setCurrentPage] = useRecoilState(currentPageAtom);
  const [location, setLocation] = useRecoilState(currPickedLocation);
  const editLocation = useEditLocation()

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
          LocationName={location.name}
        />
      </div>
    </div>
  );
};

export default EditCategory;
