// libraries and css
import React, { useEffect } from 'react';

// components
import List from '../../../components/list/List'

// consts
import { CATEGORIES, CATEGORIES_CHECKED } from '../../../consts'

// utils
import { isParentEvent } from '../../../utils'

// store
import { 
  setCurrentEntity, 
  setCurrentPage,
  setCurrentPickedItem
} 
from '../../../store/features/context'
import { useDispatch, useSelector } from 'react-redux'

function Categories() {
  const categories = useSelector(state => state.categories)
  const dispatch = useDispatch()
  // const categories = useRecoilValue(categoriesAtom);
  // const setCurrentPage = useSetRecoilState(currentPageAtom)
  // const setCurrentEntity = useSetRecoilState(currentEntityAtom)
  // const setCurrPickedListItem = useSetRecoilState(currPickedListItemAtom)

  useEffect(() => {
    dispatch(setCurrentPage(CATEGORIES))
    dispatch(setCurrentEntity(CATEGORIES))
  }, [categories])

  // allows the parent div to fire a click event seperate from his childs
  const onParentClick = event => {
    if (isParentEvent(event)) {
      dispatch(setCurrentPage(CATEGORIES))
    }
  }

  const onListItemClick = (item) => {
    dispatch(setCurrentPage(CATEGORIES_CHECKED))
    dispatch(setCurrentPickedItem(item))
  }

  return (
    <div 
      className="page"
      onClick={event => onParentClick(event)}
    >
      <div className="page__content">
        <List
          data={categories}
          onClickHandler={onListItemClick}
        />
      </div>
    </div>
  );
};

export default Categories;
