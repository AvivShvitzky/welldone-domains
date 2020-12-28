import { categories } from '../mockData'

import {tmp} from '../../pages/tmp'

tmp([1, 2, 3, 4, 5, 6], (val) => val > 2)

// constants
const EDIT_CATEGORY = 'EDIT_CATEGORY';

// actions
export const editCategory = updatedCategory => {
  return {
    type: EDIT_CATEGORY,
    payload: { 
      updatedCategory
    }
  }
}

// reducer
export default (state = categories, action) => {
  switch (action.type) {
    case EDIT_CATEGORY:
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
