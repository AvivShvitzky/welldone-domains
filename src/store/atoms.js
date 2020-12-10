import { atom } from "recoil";

import { NOT_MOUNTED, CATEGORIES } from '../consts'
import { categories as categoriesData, locations as LocationsData } from './mockData'

export const currentPage = atom({
  key: 'currentPage',
  default: NOT_MOUNTED
});

export const currentEntity = atom({
  key: 'currentEntity',
  default: CATEGORIES
});

export const categories = atom({
  key: 'categories',
  default: categoriesData
});

export const currPickedCategory = atom({
  key: 'currPickedCategory',
  default: {}
});

export const locations = atom({
  key: 'locations',
  default: LocationsData
});

export const currPickedLocation = atom({
  key: 'currPickedLocation',
  default: {}
});
