import { 
  EDIT_CATEGORY
} 
from './types'

export const editCategory = updatedCategory => {
  return {
    type: EDIT_CATEGORY,
    payload: { 
      updatedCategory
    }
  }
}

