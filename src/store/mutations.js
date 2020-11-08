import React, { useState } from 'react';

import { useSetRecoilState } from "recoil";

import { categories } from './atoms'

export function addCategory(newCategoryName) {
  const setCategories = useSetRecoilState(categories);

  setCategories((oldCategories) => {
    const categoryExists = findCategoryIndex(newCategoryName) !== -1
    if (!categoryExists) {
      return [
        ...oldCategories,
        {
          name: newCategoryName
        },
      ]
    }
    return;
  });
}

/**
* searches for a category with a given name.
* @param {String} categoryName
* @returns the index of the found category. If none, it returns -1.
*/
function findCategoryIndex(categoryName) {
  const categoryIndex = categories.findIndex(category => category.name === categoryName);
  return categoryIndex;
}

// utility for creating unique Id
let id = 0;
function getId() {
  return id++;
}