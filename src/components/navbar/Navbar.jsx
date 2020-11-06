import React, { useEffect } from 'react';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faPlus, faEdit, faBookOpen, faTrashAlt } from '@fortawesome/free-solid-svg-icons'

import Title from '../title/Title'
import {
  ICON_ADD, ICON_VIEW, ICON_EDIT, ICON_DELETE,
  CATEGORIES, CATEGORIES_CHECKED, ADD_CATEGORY, EDIT_CATEGORY, VIEW_CATEGORY
} from '../../consts'

import { useRecoilState } from "recoil";
import { currentPage as currentPageAtom } from "../../store/atoms";

function Navbar({ title }) {
  const [currentPage, setCurrentPage] = useRecoilState(currentPageAtom);
  // determans if an icon would be available on a certain page
  const iconsAvailability = {
    CATEGORIES: [ICON_ADD], 
    CATEGORIES_CHECKED: [ICON_ADD, ICON_VIEW, ICON_EDIT, ICON_DELETE], 
    ADD_CATEGORY: [], 
    EDIT_CATEGORY: [ICON_ADD, ICON_DELETE],
    VIEW_CATEGORY: [ICON_ADD, ICON_EDIT, ICON_DELETE]
  }

  useEffect(() => {
    console.log(currentPage);
  }, [currentPage]);
  
  const iconAvailable = iconType => {
    return iconsAvailability[currentPage].includes(iconType)
  }

  return (
    <nav className="navbar bg-white">
      <Title>{title}</Title>

      <div className="navbar__icons">
        <div className={`icon__box ${iconAvailable(ICON_ADD) ? 'icon__box--available' : 'icon__box--unavailable'}`}>
          <FontAwesomeIcon 
            icon={faPlus} 
            size="lg"/>
          <span>Add</span>
        </div>
        <div className={`icon__box ${iconAvailable(ICON_VIEW) ? 'icon__box--available' : 'icon__box--unavailable'}`}>
          <FontAwesomeIcon 
            icon={faBookOpen} 
            size="lg"/>
          <span>View</span>
        </div>
        <div className={`icon__box ${iconAvailable(ICON_EDIT) ? 'icon__box--available' : 'icon__box--unavailable'}`}>
          <FontAwesomeIcon 
            icon={faEdit} 
            size="lg"/>
          <span>Edit</span>
        </div>
        <div className={`icon__box ${iconAvailable(ICON_DELETE) ? 'icon__box--available' : 'icon__box--unavailable'}`}>
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
