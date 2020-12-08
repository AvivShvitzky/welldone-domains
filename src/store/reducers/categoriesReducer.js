import { 
  EDIT_CATEGORY 
} 
from '../actions/actionTypes'

import { categories } from '../mockData'

export default (state = categories, action) => {
  switch (action.type) {
    case EDIT_CATEGORY:
      const { category: updatedCategory } = action.payload;
      return state.map(category => 
        category.id === updatedCategory.id 
        ? { ...category, ...updatedCategory } 
        : category
      )
    default:
      return state
  }
}
