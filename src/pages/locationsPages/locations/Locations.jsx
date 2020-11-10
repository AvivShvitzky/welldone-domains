// libraries and css
import React, { useEffect } from 'react';

// components
import Table from '../../../components/table/Table'

// consts
import { LOCATIONS, LOCATIONS_CHECKED } from '../../../consts'
import { columns } from '../../../components/table/columns'

// utils
import { allowParentEvent } from '../../../store/utils'

// store
import { useRecoilState } from "recoil"; 
import { 
  locations as locationsAtom,
  currentPage as currentPageAtom,
  currPickedLocation as currPickedListItemAtom
} 
from '../../../store/atoms'

function Locations(props) {
  const [currentPage, setCurrentPage] = useRecoilState(currentPageAtom);
  const [locations, setLocations] = useRecoilState(locationsAtom);
  const [currPickedListItem, setCurrPickedListItem] = useRecoilState(currPickedListItemAtom);

  const tmp = [{
    Name: 't',
    Category: 'c',
    Coordinates: 'co',
    Address: 'a'
  }]

  useEffect(() => {
    setCurrentPage(LOCATIONS)
  }, [])

  // allows the parent div to fire a click event seperate from his childs
  const clickHandler = event => {
    allowParentEvent(event, LOCATIONS, setCurrentPage)
  }

  const listItemClickHandler = (listItem) => {
    setCurrentPage(LOCATIONS_CHECKED)
    setCurrPickedListItem(listItem)
  }

  return (
    <div 
      className="page"
      onClick={event => clickHandler(event)}
    >
      <div className="page__content">
        <Table
          columns={columns}
          data={tmp}
          onClickHandler={listItemClickHandler}
        />
      </div>
    </div>
  );
};

export default Locations;