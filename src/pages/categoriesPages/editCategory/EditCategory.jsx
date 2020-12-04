// libraries and css
import React, { useEffect, useState } from 'react';

// components
import Form from '../../../components/form/form-categories/Form'

// consts
import { EDIT_CATEGORY, ENTITY_CATEGORIES, ACTION_EDIT } from '../../../consts'

// store
import { useSetRecoilState } from "recoil";
import { currentPage as currentPageAtom } from '../../../store/atoms'
import { useEntityReducer } from '../../../store/mutations'


function EditCategory(props) {
  const [category, setCategory] = useState({ name: '' })
  const setCurrentPage = useSetRecoilState(currentPageAtom);
  const editCategory = useEntityReducer(ACTION_EDIT)

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
          categoryName={category.name}
        />
      </div>
    </div>
  );
};

export default EditCategory;
