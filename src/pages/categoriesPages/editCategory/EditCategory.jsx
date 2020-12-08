// libraries and css
import React, { useEffect, useState } from 'react';

// components
import Form from '../../../components/form/form-categories/Form'

// consts
import { EDIT_CATEGORY, ENTITY_CATEGORIES } from '../../../consts'

// store
import { editCategory } from '../../../store/actions/actions'
import { useDispatch } from 'react-redux'


function EditCategory(props) {
  const dispatch = useDispatch()
  const [category, setCategory] = useState({ name: '' })
  // const setCurrentPage = useSetRecoilState(currentPageAtom);
  // const editCategory = useEditItem(ENTITY_CATEGORIES)

  useEffect(() => {
    setCategory(props.match.params)
    // setCurrentPage(EDIT_CATEGORY)
  }, [])

  const editClickHandler = updatedCategory => {
    dispatch(editCategory(updatedCategory))
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
