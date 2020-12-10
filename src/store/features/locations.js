import { locations } from '../mockData'

// constans
const EDIT_LOCATION = 'EDIT_LOCATION';

// actions
export const editLocation = updatedLocation => {
  return {
    type: EDIT_LOCATION,
    payload: { 
      updatedLocation
    }
  }
}

// reducer
export default (state = locations, action) => {
  switch (action.type) {
    case EDIT_LOCATION:
      const { updatedLocation } = action.payload;
      console.log(updatedLocation);
      return state.map(location => 
        location.id === updatedLocation.id 
        ? { ...location, ...updatedLocation } 
        : location
      )
    default:
      return state
  }
}
