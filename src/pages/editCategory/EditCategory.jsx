// libraries and css
import React, { useEffect, useState } from 'react';
// import './Categories.css';

// components
import Form from '../../components/form/Form'

// consts
import { EDIT_CATEGORY } from '../../consts'

// store
import { useRecoilState } from "recoil";
import { currentPage as currentPageAtom } from '../../store/atoms'
import { useEditCategory } from '../../store/mutations'


function EditCategory(props) {
  const [currentPage, setCurrentPage] = useRecoilState(currentPageAtom);
  const [category, setCategory] = useState({ name: '' })
  const editCategory = useEditCategory()

  useEffect(() => {
    const categoryParam = props.match.params
    setCategory(categoryParam)
    setCurrentPage(EDIT_CATEGORY)
  }, [])

  const editClickHandler = newCategoryName => {
    return editCategory(category.name, newCategoryName)
  }

  return (
    <div className="categories">
      <div className="page__content">
        <Form 
          clickHandler={editClickHandler}
          inputValue={category.name}
        />
      </div>
    </div>
  );
};

export default EditCategory;
