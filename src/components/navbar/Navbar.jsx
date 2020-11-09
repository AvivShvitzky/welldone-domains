// libraries and css
import React from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faPlus, faEdit, faBookOpen, faTrashAlt, faHome } from '@fortawesome/free-solid-svg-icons'
import './Navbar.css';

// components
import Title from '../title/Title'

// consts
import {
  ICON_NEW, ICON_VIEW, ICON_EDIT, ICON_DELETE, ICON_HOME,
  CATEGORIES, CATEGORIES_CHECKED, NEW_CATEGORY, EDIT_CATEGORY, VIEW_CATEGORY
} from '../../consts'
import { ICONS_AVAILABILITY, TITLE_OPTIONS } from './Navbar.consts'

// store
import { useRecoilState } from "recoil";
import { 
  currentPage as currentPageAtom,
  currPickedCategory as currPickedCategoryAtom
} from "../../store/atoms";
import { useDeleteCategory } from '../../store/mutations'

function Navbar() {
  const [currentPage, setCurrentPage] = useRecoilState(currentPageAtom);
  const [currPickedCategory, setCurrPickedCategoryAtom] = useRecoilState(currPickedCategoryAtom);
  const deleteCategory = useDeleteCategory()
  const category = currPickedCategory

  const title = TITLE_OPTIONS[currentPage]
  const iconAvailable = iconType => {
    return ICONS_AVAILABILITY[currentPage].includes(iconType)
  }

  return (
    <nav className="navbar bg-white">
      <span className="title">
        
        <Title>{title}</Title>
      </span>

      <div className="navbar__icons">
        <Link 
          to='/categories' 
          className={`icon__box ${iconAvailable(ICON_HOME) ? 'icon__box--available' : 'icon__box--unavailable'}`}
        >
          <FontAwesomeIcon 
            icon={faHome} 
            size="lg"/>
          <span>Home</span>
        </Link>
        <span className="vl"></span>
        <Link 
          to={{pathname: iconAvailable(ICON_NEW) ? '/new-category' : ''}} 
          className={`icon__box ${iconAvailable(ICON_NEW) ? 'icon__box--available' : 'icon__box--unavailable'}`}
          onClick={() => setCurrentPage(NEW_CATEGORY)}
        >
          <FontAwesomeIcon 
            icon={faPlus} 
            size="lg"/>
          <span>New</span>
        </Link>
        <Link 
          to={{
            pathname: iconAvailable(ICON_VIEW) ? `/category/${category.name}` : '',
            state: { category }
          }} 
          className={`icon__box ${iconAvailable(ICON_VIEW) ? 'icon__box--available' : 'icon__box--unavailable'}`}
        >
          <FontAwesomeIcon 
            icon={faBookOpen} 
            size="lg"/>
          <span>View</span>
        </Link>
        <Link 
          to={{
            pathname: iconAvailable(ICON_EDIT) ? `/edit-category/${category.name}` : '',
            state: { category }
          }} 
          className={`icon__box ${iconAvailable(ICON_EDIT) ? 'icon__box--available' : 'icon__box--unavailable'}`}
        >
          <FontAwesomeIcon 
            icon={faEdit} 
            size="lg"/>
          <span>Edit</span>
        </Link>
        <div 
          className={`icon__box ${iconAvailable(ICON_DELETE) ? 'icon__box--available' : 'icon__box--unavailable'}`}
          onClick={() => deleteCategory(category)}  
        >
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
