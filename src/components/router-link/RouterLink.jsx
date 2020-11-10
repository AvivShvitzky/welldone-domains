// libraries and css
import React from 'react';
import { Link } from "react-router-dom";

const RouterLink = ({ children, entity, path, onClickHandler }) => {
  return (
    <Link 
      to={path}
      className="btn btn-primary"
      onClick={() => onClickHandler(entity)}
    >
      {children}
    </Link>
  );
};

export default RouterLink;
