// libraries and css
import React from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faPlus, faEdit, faBookOpen, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import './Navbar.css';

// components
import Title from '../title/Title'

// consts
import {
  ICON_NEW, ICON_VIEW, ICON_EDIT, ICON_DELETE,
  CATEGORIES, CATEGORIES_CHECKED, NEW_CATEGORY, EDIT_CATEGORY, VIEW_CATEGORY
} from '../../consts'
import { ICONS_AVAILABILITY, TITLE_OPTIONS } from './Navbar.consts'

// store
import { useRecoilState } from "recoil";
import { currentPage as currentPageAtom } from "../../store/atoms";

function Navbar() {
  const [currentPage, setCurrentPage] = useRecoilState(currentPageAtom);
  const title = TITLE_OPTIONS[currentPage]

  const iconAvailable = iconType => {
    return ICONS_AVAILABILITY[currentPage].includes(iconType)
  }

  return (
    <nav className="navbar bg-white">
      <Link 
        to='/categories'
        className="title__link"
      >
        <Title>{title}</Title>
      </Link>

      <div className="navbar__icons">
        <Link 
          to='/new-category' 
          className={`icon__box ${iconAvailable(ICON_NEW) ? 'icon__box--available' : 'icon__box--unavailable'}`}
          onClick={() => setCurrentPage(NEW_CATEGORY)}
        >
          <FontAwesomeIcon 
            icon={faPlus} 
            size="lg"/>
          <span>New</span>
        </Link>
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
