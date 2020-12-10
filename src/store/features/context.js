import { CATEGORIES } from '../../consts'

// constans
const SET_CURRENT_ENTITY = 'SET_CURRENT_ENTITY';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_CURRENT_PICKED_ITEM = 'SET_CURRENT_PICKED_ITEM'; 

// actions
export const setCurrentEntity = entityName => {
  return {
    type: SET_CURRENT_ENTITY,
    payload: entityName
  }
}

export const setCurrentPage = pageName => {
  return {
    type: SET_CURRENT_PAGE,
    payload: pageName
  }
}

export const setCurrentPickedItem = item => {
  return {
    type: SET_CURRENT_PICKED_ITEM,
    payload: item
  }
}

// reducer
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
