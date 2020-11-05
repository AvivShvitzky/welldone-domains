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
        <FontAwesomeIcon 
          icon={faPlus} 
          size="xs"
          className={true ? 'icon--available' : 'icon--unavailable'}
        />
        <FontAwesomeIcon 
          icon={faBookOpen} 
          size="xs"
          className={true ? 'icon--available' : 'icon--unavailable'}
        />
        <FontAwesomeIcon 
          icon={faEdit} 
          size="xs"
          className={true ? 'icon--available' : 'icon--unavailable'}
        />
        <FontAwesomeIcon 
          icon={faTrashAlt} 
          size="xs"
          className={true ? 'icon--available' : 'icon--unavailable'}
        />
      </div>
    </div>
  );
};

export default Navbar;
