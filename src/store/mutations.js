import React, { useState, useCallback } from 'react';

import { useRecoilState } from "recoil";

import { categories as categoriesAtom } from './atoms'
import { findCategoryIndex, deepCopyArray } from './utils'

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
      } else{
        return false
      }
    },
    [categories, categoryExists],
    );
    
  return memoizedCallback;
}

export function useEditCategory() {
  const [categories, setCategories] = useRecoilState(categoriesAtom);
  
  const memoizedCallback = useCallback(
    updatedCategoryName => {
      const categoryIndex = findCategoryIndex(categories, updatedCategoryName)
      const copiedCategories = deepCopyArray(categories)
      copiedCategories[categoryIndex].name = updatedCategoryName
      setCategories(copiedCategories)
      // return the name for success check
      return categories[categoryIndex].name
    },
    [categories],
    );
    
  return memoizedCallback;
}

/**
* checks if a category exists on the categories list.
* @param {Array} categories
* @param {String} categoryName
* @returns if the category exists on the categories list.
*/
function categoryExists(categories, categoryName) {
  return findCategoryIndex(categories, categoryName) !== -1
}