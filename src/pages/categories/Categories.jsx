import React from 'react';
import './Categories.css';

import { useRecoilState } from "recoil";
import { currentPage as categoryIsCheckedAtom } from "../../store/atoms";
import { CATEGORIES } from '../../consts'

import Navbar from '../../components/navbar/Navbar'
import List from '../../components/list/List'

function Categories() {
  const [categoryIsChecked, setCategoryIsChecked] = useRecoilState(categoryIsCheckedAtom);

  // allows the parent div to fire a click event seperate from his childs
  const clickHandler = event => {
    event.preventDefault();
    if (event.target === event.currentTarget) {
      setCategoryIsChecked(CATEGORIES)
    }
  }

  return (
    <div 
      className="categories"
      onClick={event => clickHandler(event)}
    >
      <Navbar
        title="Categories"
      />
      <div className="page__content">
        <List
          onClickHandler={setCategoryIsChecked}
        />
      </div>
    </div>
  );
};

export default Categories;
