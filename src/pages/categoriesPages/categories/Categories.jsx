// libraries and css
import React, { useEffect } from 'react';

// components
import List from '../../../components/list/List'

// consts
import { CATEGORIES, CATEGORIES_CHECKED, ENTITY_CATEGORIES } from '../../../consts'

// utils
import { allowParentEvent } from '../../../store/utils'

// store
import { useRecoilState } from "recoil"; 
import { 
  categories as categoriesAtom,
  currentPage as currentPageAtom,
  currPickedCategory as currPickedListItemAtom,
  currentEntity as currentEntityAtom
} 
from '../../../store/atoms'

function Categories(props) {
  const [currentPage, setCurrentPage] = useRecoilState(currentPageAtom);
  const [currentEntity, setCurrentEntity] = useRecoilState(currentEntityAtom);
  const [categories, setCategories] = useRecoilState(categoriesAtom);
  const [currPickedListItem, setCurrPickedListItem] = useRecoilState(currPickedListItemAtom);

  useEffect(() => {
    setCurrentPage(CATEGORIES)
    setCurrentEntity(ENTITY_CATEGORIES)
  }, [])

  // allows the parent div to fire a click event seperate from his childs
  const clickHandler = event => {
    allowParentEvent(event, CATEGORIES, setCurrentPage)
  }

  const listItemClickHandler = (listItem) => {
    setCurrentPage(CATEGORIES_CHECKED)
    setCurrPickedListItem(listItem)
  }

  return (
    <div 
      className="page"
      onClick={event => clickHandler(event)}
    >
      <div className="page__content">
        <List
          data={categories}
          onClickHandler={listItemClickHandler}
        />
      </div>
    </div>
  );
};

export default Categories;
