// libraries and css
import React, { useEffect } from 'react';
// import './Categories.css';

// components
import Form from '../../components/form/Form'

// consts
import { EDIT_CATEGORY } from '../../consts'

// store
import { useRecoilState } from "recoil";
import { currentPage as currentPageAtom } from '../../store/atoms'
import { useEditCategory } from '../../store/mutations'


function EditCategory() {
  const [currentPage, setCurrentPage] = useRecoilState(currentPageAtom);
  const editCategory = useEditCategory()

  useEffect(() => {
    setCurrentPage(EDIT_CATEGORY)
  }, [])

  return (
    <div className="categories">
      <div className="page__content">
        <Form 
          clickHandler={editCategory}
        />
      </div>
    </div>
  );
};

export default EditCategory;
