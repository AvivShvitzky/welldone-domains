import React, { useEffect } from 'react';
// import './Categories.css';

import { useRecoilState } from "recoil";
import { 
  currentPage as currentPageAtom, 
  // categories as categoriesAtom 
} 
from '../../store/atoms'
import { NEW_CATEGORY } from '../../consts'

function NewCategory() {
  const [currentPage, setCurrentPage] = useRecoilState(currentPageAtom);
  // const [categories, setCategories] = useRecoilState(categoriesAtom);

  useEffect(() => {
    setCurrentPage(NEW_CATEGORY)
  }, [])

  return (
    <div className="categories">
      <div className="page__content">
        
      </div>
    </div>
  );
};

export default NewCategory;
