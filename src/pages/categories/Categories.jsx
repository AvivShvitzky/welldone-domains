// libraries and css
import React, { useEffect } from 'react';
import './Categories.css';

// components
import List from '../../components/list/List'

// consts
import { CATEGORIES, CATEGORIES_CHECKED } from '../../consts'

// store
import { useRecoilState } from "recoil"; 
import { 
  categories as categoriesAtom,
  currentPage as currentPageAtom,
  currPickedCategory as currPickedListItemAtom
} 
from '../../store/atoms'

function Categories(props) {
  const [currentPage, setCurrentPage] = useRecoilState(currentPageAtom);
  const [categories, setCategories] = useRecoilState(categoriesAtom);
  const [currPickedListItem, setCurrPickedListItem] = useRecoilState(currPickedListItemAtom);

  useEffect(() => {
    setCurrentPage(CATEGORIES)
  }, [])

  // allows the parent div to fire a click event seperate from his childs
  const clickHandler = event => {
    event.preventDefault();
    if (event.target === event.currentTarget) {
      setCurrentPage(CATEGORIES)
    }
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
