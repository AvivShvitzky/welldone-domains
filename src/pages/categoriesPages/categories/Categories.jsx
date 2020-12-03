// libraries and css
import React, { useEffect } from 'react';

// components
import List from '../../../components/list/List'

// consts
import { CATEGORIES, CATEGORIES_CHECKED, ENTITY_CATEGORIES } from '../../../consts'

// utils
import { isParentEvent } from '../../../utils'

// store
import { useRecoilValue, useSetRecoilState } from "recoil"; 
import { 
  categories as categoriesAtom,
  currentPage as currentPageAtom,
  currPickedCategory as currPickedListItemAtom,
  currentEntity as currentEntityAtom
} 
from '../../../store/atoms'

function Categories(props) {
  const setCurrentPage = useSetRecoilState(currentPageAtom)
  const setCurrentEntity = useSetRecoilState(currentEntityAtom)
  const setCurrPickedListItem = useSetRecoilState(currPickedListItemAtom)
  const categories = useRecoilValue(categoriesAtom);

  useEffect(() => {
    setCurrentPage(CATEGORIES)
    setCurrentEntity(ENTITY_CATEGORIES)
  }, [])

  // allows the parent div to fire a click event seperate from his childs
  const onParentClick = event => {
    if (isParentEvent(event)) {
      setCurrentPage(CATEGORIES)
    }
  }

  const onListItemClick = (listItem) => {
    setCurrentPage(CATEGORIES_CHECKED)
    setCurrPickedListItem(listItem)
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
