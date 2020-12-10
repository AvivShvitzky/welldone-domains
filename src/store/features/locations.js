import { locations } from '../mockData'

// constans
const EDIT_LOCATION = 'EDIT_LOCATION';

// actions
export const editLocationActionCreator = (id, location) => {
  return {
    type: EDIT_LOCATION,
    payload: { 
      id, 
      location
    }
  }
}

// reducer
export default (state = locations, action) => {
  switch (action.type) {
    case EDIT_LOCATION:
      const { updatedLocation } = action.payload;
      return state.map(location => 
        location.id === updatedLocation.id 
        ? { ...location, ...updatedLocation } 
        : location
      )
    default:
      return state
  }
}
