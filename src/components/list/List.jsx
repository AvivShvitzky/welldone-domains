import React from 'react';
import './List.css';

import { CATEGORIES_CHECKED } from '../../consts' 

function List({ data, onClickHandler }) {

  const listItems = data.map(item =>
  <a 
    onClick={() => onClickHandler(CATEGORIES_CHECKED)} href="#" className="list-group-item list-group-item-action"
    key={item.name.toString()}
  >
    {item.name}
  </a>
  );

  return (
    <div className="list">
      <div className="list-group">
        {listItems}
      </div>
    </div>
  );
};

export default List;
