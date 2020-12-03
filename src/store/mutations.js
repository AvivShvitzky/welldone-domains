// libraries
import React, { useState, useCallback } from 'react';
import { useRecoilState } from "recoil";

// atoms
import { 
  categories as categoriesAtom, 
  locations as locationsAtom,
} 
from './atoms'

// utils store
import { 
  findIndexByName,  
  entityExists,
} from './utils'
// utils
import { deepCopyArray } from '../utils'

export function useAddCategory() {
  const [categories, setCategories] = useRecoilState(categoriesAtom);
  
  const memoizedCallback = useCallback(
    newCategoryName => {
      if (!entityExists(categories, newCategoryName)) {
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
    [categories, entityExists],
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
  return DeleteEntity(categories, setCategories)
}

export function useAddLocation() {
  const [locations, setLocations] = useRecoilState(locationsAtom);
  
  const memoizedCallback = useCallback(
    newLocation => {
      if (!entityExists(locations, newLocation.name)) {
        const updatedLocations = [
          ...locations,
          newLocation
        ]
        setLocations(updatedLocations)
        return true
      } 
      return false
    },
    [locations, entityExists],
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
  return DeleteEntity(locations, setLocations)
}

function DeleteEntity(data, setData) {
  const memoizedCallback = useCallback(
    currPickedEntity => {
      const itemIndex = findIndexByName(data, currPickedEntity.name)
      if (itemIndex !== -1) {
        const copiedData = deepCopyArray(data)
        copiedData.splice(itemIndex, 1) // removes the location from the data array
        const updatedData = copiedData
        setData(updatedData)
        return true
      } 
      return false
    },
    [data],
    );
    
  return memoizedCallback;
}