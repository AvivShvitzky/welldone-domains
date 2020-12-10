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

// reducer TODO!!!!
export default (state = locations, action) => {
  switch (action.type) {
    case EDIT_LOCATION:
      const { updatedCategory } = action.payload;
      return state.map(category => 
        category.id === updatedCategory.id 
        ? { ...category, ...updatedCategory } 
        : category
      )
    default:
      return state
  }
}
