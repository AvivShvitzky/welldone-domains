import React, { useEffect } from 'react';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faPlus, faEdit, faBookOpen, faTrashAlt } from '@fortawesome/free-solid-svg-icons'

import Title from '../title/Title'

import { useRecoilState } from "recoil";
import { currentPage as currentPageAtom } from "../../store/atoms";

function Navbar({ title }) {
  const [currentPage, setCurrentPage] = useRecoilState(currentPageAtom);

  // const pages = {
  //   categories: 'categories', 
  //   categoriesChecked: 'categoriesChecked', 
  //   AddCategory: 'AddCategory', 
  //   EditCategory: 'EditCategory',
  //   ViewCategory: 'ViewCategory'
  // }

  useEffect(() => {
    console.log(currentPage);
    // setCurrentPage(pages[currentPageAtom])
  }, [currentPage]);



  return (
    <nav className="navbar bg-white">
      <Title>{title}</Title>

      <div className="navbar__icons">
        <div className={`icon__box ${true ? 'icon__box--available' : 'icon__box--unavailable'}`}>
          <FontAwesomeIcon 
            icon={faPlus} 
            size="lg"/>
          <span>Add</span>
        </div>
        <div className={`icon__box ${currentPage === 'categories' ? 'icon__box--available' : 'icon__box--unavailable'}`}>
          <FontAwesomeIcon 
            icon={faBookOpen} 
            size="lg"/>
          <span>Read</span>
        </div>
        <div className={`icon__box ${currentPage === 'categories' ? 'icon__box--available' : 'icon__box--unavailable'}`}>
          <FontAwesomeIcon 
            icon={faEdit} 
            size="lg"/>
          <span>Edit</span>
        </div>
        <div className={`icon__box ${currentPage === 'categories' ? 'icon__box--available' : 'icon__box--unavailable'}`}>
          <FontAwesomeIcon 
            icon={faTrashAlt} 
            size="lg"/>
          <span>Delete</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
