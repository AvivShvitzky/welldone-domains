import React, { useState, useCallback } from 'react';

import { useRecoilState } from "recoil";

import { categories as categoriesAtom } from './atoms'

export function AddCategory() {
  const [categories, setCategories] = useRecoilState(categoriesAtom);

  const categoryExists = newCategoryName => findCategoryIndex(categories, newCategoryName) !== -1

  const memoizedCallback = useCallback(
    newCategoryName => {
      if (!categoryExists(newCategoryName)) {
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

  return memoizedCallback
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