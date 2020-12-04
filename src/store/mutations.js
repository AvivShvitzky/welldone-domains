// libraries
import { useCallback } from 'react';
import { useRecoilState, useRecoilValue } from "recoil";

// consts
import { ENTITY_CATEGORIES, ENTITY_LOCATIONS, ACTION_ADD, ACTION_EDIT, ACTION_DELETE } from '../consts'

// atoms
import { 
  categories as categoriesAtom, 
  locations as locationsAtom,
  currentEntity as currentEntityAtom
} 
from './atoms'

// utils store
import { 
  findIndexByName,  
  entityExists,
} from './utils'
// utils
import { deepCopyArray } from '../utils'

export function useEntityReducer(actionType) {
  const [categories, setCategories] = useRecoilState(categoriesAtom);
  const [locations, setLocations] = useRecoilState(locationsAtom);
  const currentEntity = useRecoilValue(currentEntityAtom)
  if (currentEntity === ENTITY_CATEGORIES) {
    return useActionPicker(actionType, categories, setCategories)
  }
  if (currentEntity === ENTITY_LOCATIONS) {
    return useActionPicker(actionType, locations, setLocations)
  }
}

function useActionPicker(actionType, data, setData) {
  if (actionType === ACTION_ADD) return useAddItem(data, setData)
  if (actionType === ACTION_EDIT) return useEditItem(data, setData)
  if (actionType === ACTION_DELETE) return useDeleteItem(data, setData)
}

function useAddItem(data, setData) {
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

export function useEditItem(data, setData) {
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

function useDeleteItem(data, setData) {
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