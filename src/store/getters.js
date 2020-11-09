import React, { useState, useCallback } from 'react';

import { useRecoilState } from "recoil";

import { categories as categoriesAtom } from './atoms'
import { findCategoryIndex } from './utils'

export function useFindCategory() {
  const [categories, setCategories] = useRecoilState(categoriesAtom);
  
  const memoizedCallback = useCallback(
    categoryName => {
      const categoryIndex = findCategoryIndex(categories, categoryName)
      return categories[categoryIndex]
    },
    [categories],
    );
    
  return memoizedCallback;
} 