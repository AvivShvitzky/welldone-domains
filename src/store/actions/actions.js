import { 
  EDIT_CATEGORY, 
  EDIT_LOCATION, 
  SET_ENTITY 
} 
from './actionTypes'

export const editCategory = category => {
  return {
    type: EDIT_CATEGORY,
    payload: { 
      category
    }
  }
}

export const editLocationActionCreator = (id, location) => {
  return {
    type: EDIT_LOCATION,
    payload: { 
      id, 
      location
    }
  }
}

export const setEntityActionCreator = entity => {
  return {
    type: SET_ENTITY,
    payload: entity
  }
}


