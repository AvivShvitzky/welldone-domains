// libraries and css
import React, { useEffect } from 'react';
// import './Categories.css';

// components
import Form from '../../components/form/Form'

// consts
import { NEW_CATEGORY } from '../../consts'

// store
import { useRecoilState } from "recoil";
import { currentPage as currentPageAtom } from '../../store/atoms'
import { AddCategory as useCategoryMutation } from '../../store/mutations'


function NewCategory() {
  const [currentPage, setCurrentPage] = useRecoilState(currentPageAtom);
  const AddCategory = useCategoryMutation()

  useEffect(() => {
    setCurrentPage(NEW_CATEGORY)
  }, [])

  return (
    <div className="categories">
      <div className="page__content">
        <Form 
          clickHandler={AddCategory}
        />
      </div>
    </div>
  );
};

export default NewCategory;
