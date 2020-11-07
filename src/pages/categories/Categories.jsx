import React, { useEffect } from 'react';
import './Categories.css';

import { useRecoilState } from "recoil";
import { 
  categories as categoriesAtom,
  currentPage as currentPageAtom,
} 
from '../../store/atoms'
import { CATEGORIES } from '../../consts'

import List from '../../components/list/List'

function Categories(props) {
  const [currentPage, setCurrentPage] = useRecoilState(currentPageAtom);
  const [categories, setCategories] = useRecoilState(categoriesAtom);

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

  return (
    <div 
      className="categories"
      onClick={event => clickHandler(event)}
    >
      <div className="page__content">
        <List
          data={categories}
          onClickHandler={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default Categories;
