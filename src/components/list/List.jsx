import React from 'react';
import './List.css';

const List = ({ onClickHandler }) => {
  return (
    <div className="list">
      <div className="list-group">
        <a onClick={() => onClickHandler('categoriesChecked')} href="#" className="list-group-item list-group-item-action">Cras justo odio</a>
        <a onClick={() => onClickHandler('categoriesChecked')} href="#" className="list-group-item list-group-item-action">Dapibus ac facilisis in</a>
        <a onClick={() => onClickHandler('categoriesChecked')} href="#" className="list-group-item list-group-item-action">Morbi leo risus</a>
        <a onClick={() => onClickHandler('categoriesChecked')} href="#" className="list-group-item list-group-item-action">Porta ac consectetur ac</a>
        <a onClick={() => onClickHandler('categoriesChecked')} href="#" className="list-group-item list-group-item-action">Vestibulum at eros</a>
      </div>
    </div>
  );
};

export default List;
