// libraries and css
import React, { useEffect } from 'react';

// components
import Form from '../../../components/form/form-locations/Form'

// consts
import { NEW_LOCATION } from '../../../consts'

// store
import { useRecoilState } from "recoil";
import { currentPage as currentPageAtom, categories as categoriesAtom } from '../../../store/atoms'
import { useAddLocation } from '../../../store/mutations'


function NewCategory() {
  const [currentPage, setCurrentPage] = useRecoilState(currentPageAtom);
  const [categories, setCategories] = useRecoilState(categoriesAtom);
  const addLocation = useAddLocation()

  useEffect(() => {
    setCurrentPage(NEW_LOCATION)
  }, [])

  return (
    <div className="categories">
      <div className="page__content">
        <Form 
          clickHandler={addLocation}
          currentPage={currentPage}
          categories={categories}
        />
      </div>
    </div>
  );
};

export default NewCategory;
