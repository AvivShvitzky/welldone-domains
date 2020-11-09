import React, { useState, useCallback } from 'react';

import { useRecoilState } from "recoil";

import { categories as categoriesAtom } from './atoms'
import { findCategoryIndex } from './utils'

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

/**
* checks if a category exists on the categories list.
* @param {Array} categories
* @param {String} categoryName
* @returns if the category exists on the categories list.
*/
function categoryExists(categories, categoryName) {
  return findCategoryIndex(categories, categoryName) !== -1
}