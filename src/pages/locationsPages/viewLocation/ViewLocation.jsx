// libraries and css
import React, { useEffect } from 'react';

// components
import GoogleMaps from '../../../components/google-maps/GoogleMaps'

// consts
import { VIEW_LOCATION } from '../../../consts'

// store
import { useRecoilValue, useSetRecoilState } from "recoil";
  import { currentPage as currentPageAtom, currPickedLocation } from '../../../store/atoms'

function ViewCategory() {
  const setCurrentPage = useSetRecoilState(currentPageAtom);
  const location = useRecoilValue(currPickedLocation);

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
        <GoogleMaps 
          longitude={location.longitude}
          latitude={location.latitude}
        />
      </div>
    </div>
  );
};

export default ViewCategory;
