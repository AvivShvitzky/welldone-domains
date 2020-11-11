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
  ENTITY_CATEGORIES
} from '../../consts'
import { ICONS_AVAILABILITY, TITLE_OPTIONS, NAVIGATE_OPTIONS } from './Navbar.consts'

// store
import { useRecoilState } from "recoil";
import { 
  currentPage as currentPageAtom,
  currPickedCategory as currPickedCategoryAtom,
  currPickedLocation as currPickedLocationAtom,
  currentEntity as currentEntityAtom
} from "../../store/atoms";
import { useDeleteCategory } from '../../store/mutations'

function Navbar() {
  const [currentPage, setCurrentPage] = useRecoilState(currentPageAtom);
  const [currPickedCategory, setCurrPickedCategoryAtom] = useRecoilState(currPickedCategoryAtom);
  const [currPickedLocation, setCurrPickedLocation] = useRecoilState(currPickedLocationAtom);
  const [currentEntity, setCurrentEntity] = useRecoilState(currentEntityAtom)
  const deleteCategory = useDeleteCategory()

  const dataForNavigation = currentEntity === ENTITY_CATEGORIES ? currPickedCategory : currPickedLocation

  const title = TITLE_OPTIONS[currentPage]
  const iconAvailable = iconType => {
    return ICONS_AVAILABILITY[currentPage].includes(iconType)
  }

  const navigateTo = (iconType, toParam) => {
    if (iconAvailable(iconType)) {
      let to = NAVIGATE_OPTIONS[currentEntity][iconType]
      if (toParam) {
        to = to + toParam
      }
      return to
    }
    return ''
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
          to={{pathname: navigateTo(ICON_NEW)}} 
          className={`icon__box ${iconAvailable(ICON_NEW) ? 'icon__box--available' : 'icon__box--unavailable'}`}
        >
          <FontAwesomeIcon 
            icon={faPlus} 
            size="lg"/>
          <span>New</span>
        </Link>
        <Link 
          to={{
            pathname: navigateTo(ICON_VIEW, dataForNavigation.name),
            state: { dataForNavigation }
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
            pathname: navigateTo(ICON_EDIT, dataForNavigation.name),
            state: { dataForNavigation }
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
          onClick={() => deleteCategory(currPickedCategory)}  
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
