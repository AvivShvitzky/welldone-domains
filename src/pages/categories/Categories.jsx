import React from 'react';
import './Categories.css';

import { useRecoilState } from "recoil";
import { currentPage as categoryIsCheckedAtom } from "../../store/atoms";

import Navbar from '../../components/navbar/Navbar'
import List from '../../components/list/List'

function Categories() {
  const [categoryIsChecked, setCategoryIsChecked] = useRecoilState(categoryIsCheckedAtom);

  return (
    <div className="categories">
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
