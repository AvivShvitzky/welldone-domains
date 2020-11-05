import React from 'react';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faPlus, faEdit, faBookOpen, faTrashAlt } from '@fortawesome/free-solid-svg-icons'

import Title from '../title/Title'

const Navbar = ({ title }) => {
  return (
    <div className="navbar bg-white">
      <Title>{title}</Title>

      <div className="navbar__icons">
        <div className={`icon__box ${true ? 'icon__box--available' : 'icon__box--unavailable'}`}>
          <FontAwesomeIcon 
            icon={faPlus} 
            size="lg"/>
          <span>Add</span>
        </div>
        <div className={`icon__box ${true ? 'icon__box--available' : 'icon__box--unavailable'}`}>
          <FontAwesomeIcon 
            icon={faBookOpen} 
            size="lg"/>
          <span>Read</span>
        </div>
        <div className={`icon__box ${true ? 'icon__box--available' : 'icon__box--unavailable'}`}>
          <FontAwesomeIcon 
            icon={faEdit} 
            size="lg"/>
          <span>Edit</span>
        </div>
        <div className={`icon__box ${true ? 'icon__box--available' : 'icon__box--unavailable'}`}>
          <FontAwesomeIcon 
            icon={faTrashAlt} 
            size="lg"/>
          <span>Delete</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
