import { atom } from "recoil";

import { CATEGORIES } from '../consts'
import { categories as categoriesData } from './mockData'

export const currentPage = atom({
  key: 'currentPage',
  default: CATEGORIES
});

export const categories = atom({
  key: 'categories',
  default: categoriesData
});

// export const view = atom({
//   key: "view",
//   default: "monthly",
// });