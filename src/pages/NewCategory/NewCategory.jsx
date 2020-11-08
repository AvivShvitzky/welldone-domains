// libraries and css
import React, { useEffect } from 'react';
// import './Categories.css';

// components
import Form from '../../components/form/Form'

// consts
import { NEW_CATEGORY } from '../../consts'

// store
import { useRecoilState } from "recoil";
import { 
  currentPage as currentPageAtom, 
  // categories as categoriesAtom 
} 
from '../../store/atoms'

function NewCategory() {
  const [currentPage, setCurrentPage] = useRecoilState(currentPageAtom);
  // const [categories, setCategories] = useRecoilState(categoriesAtom);

  useEffect(() => {
    setCurrentPage(NEW_CATEGORY)
  }, [])

  return (
    <div className="categories">
      <div className="page__content">
        <Form 
          clickHandler={}
        />
      </div>
    </div>
  );
};

export default NewCategory;
