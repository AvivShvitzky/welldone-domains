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
        <div className={true ? 'icon__box icon__box--available' : 'icon__box icon__box--unavailable'}>
          <FontAwesomeIcon 
            icon={faPlus} 
            size="xs"
          />
          <span>Add</span>
        </div>
        <div className={true ? 'icon__box icon__box--available' : 'icon__box icon__box--unavailable'}>
          <FontAwesomeIcon 
            icon={faBookOpen} 
            size="xs"
          />
          <span>Read</span>
        </div>
        <div className={true ? 'icon__box icon__box--available' : 'icon__box icon__box--unavailable'}>
          <FontAwesomeIcon 
            icon={faEdit} 
            size="xs"
          />
          <span>Edit</span>
        </div>
        <div className={true ? 'icon__box icon__box--available' : 'icon__box icon__box--unavailable'}>
          <FontAwesomeIcon 
            icon={faTrashAlt} 
            size="xs"
          />
          <span>Delete</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
