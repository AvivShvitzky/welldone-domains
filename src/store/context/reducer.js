import { 
  SET_CURRENT_ENTITY,
  SET_CURRENT_PAGE,
  SET_CURRENT_PICKED_ITEM 
}  
from './types'
import { CATEGORIES } from '../../consts'

const initialState = {
  currentEntity: CATEGORIES,
  currentPage: CATEGORIES,
  currentPickedItem: {}
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_ENTITY:
      return {...state, currentEntity: action.payload}
    case SET_CURRENT_PAGE:
      return {...state, currentPage: action.payload}
    case SET_CURRENT_PICKED_ITEM:
      return {...state, currentPickedItem: action.payload}
    default:
      return state
  }
}
