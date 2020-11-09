import React, { useState, useCallback } from 'react';

import { useRecoilState } from "recoil";

import { 
  categories as categoriesAtom, 
  currPickedCategory as currPickedCategoryAtom 
} 
from './atoms'
import { 
  findCategoryIndex, 
  deepCopyArray, 
  categoryExists 
} from './utils'

export function useAddCategory() {
  const [categories, setCategories] = useRecoilState(categoriesAtom);
  
  const memoizedCallback = useCallback(
    newCategoryName => {
      if (!categoryExists(categories, newCategoryName)) {
        const updatedCategories = [
          ...categories,
          {
            name: newCategoryName
          },
        ]
        setCategories(updatedCategories)
        return true
      } 
      return false
    },
    [categories, categoryExists],
    );
    
  return memoizedCallback;
}

export function useEditCategory() {
  const [categories, setCategories] = useRecoilState(categoriesAtom);
  
  const memoizedCallback = useCallback(
    (originalCategoryName, updatedCategoryName) => {
      const categoryIndex = findCategoryIndex(categories, originalCategoryName)
      const copiedCategories = deepCopyArray(categories)
      if (categoryIndex === -1) {
        return false
      } 
      else {
        copiedCategories[categoryIndex].name = updatedCategoryName
        setCategories(copiedCategories)
        return true
      }
    },
    [categories],
    );
    
  return memoizedCallback;
}

export function useDeleteCategory() {
  const [categories, setCategories] = useRecoilState(categoriesAtom);
  
  const memoizedCallback = useCallback(
    currPickedCategory => {
      const categoryIndex = findCategoryIndex(categories, currPickedCategory.name)
      if (categoryIndex !== -1) {
        const copiedCategories = deepCopyArray(categories)
        copiedCategories.splice(categoryIndex, 1) // removes the category from the categories array
        const updatedCategories = copiedCategories
        setCategories(updatedCategories)
        return true
      } 
      return false
    },
    [categories],
    );
    
  return memoizedCallback;
}

