import { 
  SET_CURRENT_ENTITY,
  SET_CURRENT_PAGE,
  SET_CURRENT_PICKED_ITEM 
} 
from './types'

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




