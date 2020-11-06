import { atom } from "recoil";

import { CATEGORIES } from '../consts'

export const currentPage = atom({
  key: "currentPage",
  default: CATEGORIES
});

// export const view = atom({
//   key: "view",
//   default: "monthly",
// });