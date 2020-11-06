import { atom } from "recoil";

export const currentPage = atom({
  key: "currentPage",
  default: 'categories'
});

// export const view = atom({
//   key: "view",
//   default: "monthly",
// });