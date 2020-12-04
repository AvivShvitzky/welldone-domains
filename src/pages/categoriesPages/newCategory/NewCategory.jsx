// libraries and css
import React, { useEffect } from 'react';

// components
import Form from '../../../components/form/form-categories/Form'

// consts
import { NEW_CATEGORY, ACTION_ADD } from '../../../consts'

// store
import { useRecoilState } from "recoil";
import { currentPage as currentPageAtom } from '../../../store/atoms'
import { useEntityReducer } from '../../../store/mutations'


function NewCategory() {
  const [currentPage, setCurrentPage] = useRecoilState(currentPageAtom);
  const addCategory = useEntityReducer(ACTION_ADD)

  useEffect(() => {
    setCurrentPage(NEW_CATEGORY)
  }, [])

  return (
    <div className="categories">
      <div className="page__content">
        <Form 
          clickHandler={addCategory}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
};

export default NewCategory;
