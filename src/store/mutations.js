import React, { useState, useCallback } from 'react';

import { useRecoilState } from "recoil";

import { categories as categoriesAtom } from './atoms'

export function AddCategory() {
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

/**
* searches for a category with a given name.
* @param {String} categoryName
* @returns the index of the found category. If none, it returns -1.
*/
function findCategoryIndex(categories, categoryName) {
  const categoryIndex = categories.findIndex(category => category.name === categoryName);
  return categoryIndex;
}