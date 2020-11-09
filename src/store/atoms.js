import { atom } from "recoil";

import { NOT_MOUNTED } from '../consts'
import { categories as categoriesData } from './mockData'

export const currentPage = atom({
  key: 'currentPage',
  default: NOT_MOUNTED
});

export const categories = atom({
  key: 'categories',
  default: categoriesData
});

export const currPickedListItem = atom({
  key: 'currPickedListItem',
  default: {}
});

// export const view = atom({
//   key: "view",
//   default: "monthly",
// });