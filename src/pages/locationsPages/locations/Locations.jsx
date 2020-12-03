// libraries and css
import React, { useEffect } from 'react';

// components
import Table from '../../../components/table/Table'

// consts
import { LOCATIONS, LOCATIONS_CHECKED, ENTITY_LOCATIONS } from '../../../consts'
import { columns } from '../../../components/table/columns'

// utils
import { isParentEvent } from '../../../utils'

// store
import { useRecoilValue, useSetRecoilState } from "recoil"; 
import { 
  locations as locationsAtom,
  currentPage as currentPageAtom,
  currPickedLocation as currPickedListItemAtom,
  currentEntity as currentEntityAtom
} 
from '../../../store/atoms'

function Locations(props) {
  const setCurrentPage = useSetRecoilState(currentPageAtom)
  const setCurrentEntity = useSetRecoilState(currentEntityAtom)
  const setCurrPickedListItem = useSetRecoilState(currPickedListItemAtom)
  const locations = useRecoilValue(locationsAtom);

  useEffect(() => {
    setCurrentPage(LOCATIONS)
    setCurrentEntity(ENTITY_LOCATIONS)
  }, [locations])

  // allows the parent div to fire a click event seperate from his childs
  const onParentClick = event => {
    if (isParentEvent(event)) {
      setCurrentPage(LOCATIONS)
    }
  }

  const onListItemClick = (listItem) => {
    setCurrentPage(LOCATIONS_CHECKED)
    setCurrPickedListItem(listItem)
  }

  return (
    <div 
      className="page"
      onClick={event => onParentClick(event)}
    >
      <div className="page__content">
        <Table
          columns={columns}
          data={locations}
          onClickHandler={onListItemClick}
        />
      </div>
    </div>
  );
};

export default Locations;
