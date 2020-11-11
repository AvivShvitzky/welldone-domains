// libraries and css
import React, { useEffect, useState } from 'react';

// components

// consts
import { VIEW_LOCATION } from '../../../consts'

// store
import { useRecoilState } from "recoil";
  import { currentPage as currentPageAtom, currPickedLocation } from '../../../store/atoms'

function ViewCategory(props) {
  const [currentPage, setCurrentPage] = useRecoilState(currentPageAtom);
  const [location, setLocation] = useRecoilState(currPickedLocation);

  useEffect(() => {
    setCurrentPage(VIEW_LOCATION)
  }, [location])

  return (
    <div className="categories">
      <div className="page__content">
        <div className="card" style={{width: '18rem', display: 'inline-block'}}>
          <div className="card-body">
            <h5 className="card-title">{location.name}</h5>
            <p className="card-text">{location.category}</p>
            <p className="card-text">{location.address}</p>
            <p className="card-text">{location.longitude} {location.latitude}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewCategory;
