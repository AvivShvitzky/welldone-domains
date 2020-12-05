// libraries
import { useCallback } from 'react';
import { useRecoilState } from "recoil";

// consts
import { ENTITY_CATEGORIES } from '../consts'

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

export function useAddItem(entity) {
  const [categories, setCategories] = useRecoilState(categoriesAtom);
  const [locations, setLocations] = useRecoilState(locationsAtom);
  if (entity === ENTITY_CATEGORIES) {
    return AddItem(categories, setCategories)
  } 
  return AddItem(locations, setLocations)
}

export function useEditItem(entity) {
  const [categories, setCategories] = useRecoilState(categoriesAtom);
  const [locations, setLocations] = useRecoilState(locationsAtom);
  if (entity === ENTITY_CATEGORIES) {
    return EditItem(categories, setCategories)
  }
  return EditItem(locations, setLocations)
}

export function useDeleteItem(entity) {
  const [categories, setCategories] = useRecoilState(categoriesAtom);
  const [locations, setLocations] = useRecoilState(locationsAtom);
  if (entity === ENTITY_CATEGORIES) {
    return DeleteItem(categories, setCategories)
  }
  return DeleteItem(locations, setLocations)
}

function AddItem(data, setData) {
  const memoizedCallback = useCallback(
    newItem => {
      if (!entityExists(data, newItem)) {
        // if the hook is being called by category entity
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

export function EditItem(data, setData) {
  const memoizedCallback = useCallback(
    (originalItem, updatedItem) => {
      const ItemIndex = findIndexByName(data, originalItem)
      const copiedData = deepCopyArray(data)
      if (ItemIndex === -1) {
        return false
      } 
      else {
        if (typeof updatedItem === 'string') {
          copiedData[ItemIndex].name = updatedItem
        } 
        else {
          copiedData[ItemIndex] = updatedItem
        }
        setData(copiedData)
        return true
      }
    },
    [data],
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
        setData(copiedData)
        return true
      } 
      return false
    },
    [data],
    );
    
  return memoizedCallback;
}