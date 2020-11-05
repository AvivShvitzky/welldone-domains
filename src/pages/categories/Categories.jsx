import React from 'react';
import './Categories.css';

import Navbar from '../../components/navbar/Navbar'

const Categories = () => {
  return (
    <div className="categories">
      <Navbar
        title="Categories"
      >
        Categories
      </Navbar>

      <div className="page__content">
        <div class="list-group">
          <a href="#" class="list-group-item list-group-item-action">Cras justo odio</a>
          <a href="#" class="list-group-item list-group-item-action">Dapibus ac facilisis in</a>
          <a href="#" class="list-group-item list-group-item-action">Morbi leo risus</a>
          <a href="#" class="list-group-item list-group-item-action">Porta ac consectetur ac</a>
          <a href="#" class="list-group-item list-group-item-action">Vestibulum at eros</a>
        </div>
      </div>
    </div>
  );
};

export default Categories;
