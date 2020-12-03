// libraries
import React, { useState, useCallback } from 'react';
import { useRecoilState } from "recoil";

// atoms
import { 
  categories as categoriesAtom, 
  locations as locationsAtom,
} 
from './atoms'

// utils
import { 
  findIndexByName,  
  EntityExists,
} from './utils'
import { deepCopyArray } from '../utils'

export function useAddCategory() {
  const [categories, setCategories] = useRecoilState(categoriesAtom);
  
  const memoizedCallback = useCallback(
    newCategoryName => {
      if (!EntityExists(categories, newCategoryName)) {
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
    [categories, EntityExists],
    );
    
  return memoizedCallback;
}

export function useEditCategory() {
  const [categories, setCategories] = useRecoilState(categoriesAtom);
  
  const memoizedCallback = useCallback(
    (originalCategoryName, updatedCategoryName) => {
      const categoryIndex = findIndexByName(categories, originalCategoryName)
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
      const categoryIndex = findIndexByName(categories, currPickedCategory.name)
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


export function useAddLocation() {
  const [locations, setLocations] = useRecoilState(locationsAtom);
  
  const memoizedCallback = useCallback(
    newLocation => {
      if (!EntityExists(locations, newLocation.name)) {
        const updatedLocations = [
          ...locations,
          newLocation
        ]
        setLocations(updatedLocations)
        return true
      } 
      return false
    },
    [locations, EntityExists],
    );
    
  return memoizedCallback;
}

export function useEditLocation() {
  const [locations, setLocations] = useRecoilState(locationsAtom);
  
  const memoizedCallback = useCallback(
    (originalLocationName, updatedLocation) => {
      const LocationIndex = findIndexByName(locations, originalLocationName)
      const copiedLocations = deepCopyArray(locations)
      if (LocationIndex === -1) {
        return false
      } 
      else {
        copiedLocations[LocationIndex] = updatedLocation
        setLocations(copiedLocations)
        return true
      }
    },
    [locations],
    );
    
  return memoizedCallback;
}

export function useDeleteLocation() {
  const [locations, setLocations] = useRecoilState(locationsAtom);
  
  const memoizedCallback = useCallback(
    currPickedLocation => {
      const LocationIndex = findIndexByName(locations, currPickedLocation.name)
      if (LocationIndex !== -1) {
        const copiedLocations = deepCopyArray(locations)
        copiedLocations.splice(LocationIndex, 1) // removes the location from the locations array
        const updatedLocations = copiedLocations
        setLocations(updatedLocations)
        return true
      } 
      return false
    },
    [locations],
    );
    
  return memoizedCallback;
}