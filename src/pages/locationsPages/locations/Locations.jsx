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
import { 
  setCurrentEntity, 
  setCurrentPage,
  setCurrentPickedItem
} 
from '../../../store/features/context'
import { useDispatch, useSelector } from 'react-redux'

function Locations(props) {
  const locations = useSelector(state => state.locations)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setCurrentPage(LOCATIONS))
    dispatch(setCurrentEntity(LOCATIONS))
  }, [locations])

  // allows the parent div to fire a click event seperate from his childs
  const onParentClick = event => {
    if (isParentEvent(event)) {
      dispatch(setCurrentPage(LOCATIONS))
    }
  }

  const onListItemClick = (listItem) => {
    dispatch(setCurrentPage(LOCATIONS_CHECKED))
    dispatch(setCurrentPickedItem(listItem))
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
