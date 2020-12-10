import { 
  EDIT_LOCATION, 
} 
from './types'

export const editLocationActionCreator = (id, location) => {
  return {
    type: EDIT_LOCATION,
    payload: { 
      id, 
      location
    }
  }
}