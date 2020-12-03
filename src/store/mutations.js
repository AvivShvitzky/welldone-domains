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
  return AddItem(categories, setCategories)
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
  return DeleteItem(categories, setCategories)
}

export function useAddLocation() {
  const [locations, setLocations] = useRecoilState(locationsAtom);
  return AddItem(locations, setLocations)
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
  return DeleteItem(locations, setLocations)
}

function AddItem(data, setData) {
  const memoizedCallback = useCallback(
    newItem => {
      if (!entityExists(data, newItem)) {
        if (typeof newItem === 'string') {
          newItem = { name: newItem }
        }
        const updatedData = [
          ...data,
          newItem
        ]
        setData(updatedData)
        return true
      } 
      return false
    },
    [data, entityExists],
    );
    
  return memoizedCallback;
}

function DeleteItem(data, setData) {
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