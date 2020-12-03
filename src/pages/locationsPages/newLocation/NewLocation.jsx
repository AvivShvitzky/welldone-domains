// libraries and css
import React, { useEffect } from 'react';

// components
import Form from '../../../components/form/form-locations/Form'

// consts
import { NEW_LOCATION, ENTITY_LOCATIONS } from '../../../consts'

// store
import { useRecoilState, useRecoilValue } from "recoil";
import { currentPage as currentPageAtom, categories as categoriesAtom } from '../../../store/atoms'
import { useAddItem } from '../../../store/mutations'


function NewCategory() {
  const [currentPage, setCurrentPage] = useRecoilState(currentPageAtom);
  const categories = useRecoilValue(categoriesAtom);
  const addLocation = useAddItem(ENTITY_LOCATIONS);

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
