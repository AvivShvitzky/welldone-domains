// libraries and css
import React, { useEffect, useState } from 'react';

// components

// consts
import { VIEW_LOCATION } from '../../../consts'

// store
import { useRecoilState } from "recoil";
import { currentPage as currentPageAtom } from '../../../store/atoms'

function ViewCategory(props) {
  const [currentPage, setCurrentPage] = useRecoilState(currentPageAtom);
  const [location, setLocation] = useState({})

  useEffect(() => {
    const locationParam = props.match.params
    console.log(locationParam);
    setLocation(locationParam)
    setCurrentPage(VIEW_LOCATION)
  }, [])

  return (
    <div className="categories">
      <div className="page__content">
        <div className="card" style={{width: '18rem', display: 'inline-block'}}>
          <div className="card-body">
            <h5 className="card-title">{location.name}</h5>
            <p className="card-text">This is a mock text for a location.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewCategory;
