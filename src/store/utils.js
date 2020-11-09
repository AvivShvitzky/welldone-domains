
/**
* searches for a category with a given name.
* @param {String} categoryName
* @returns the index of the found category. If none, it returns -1.
*/
export function findCategoryIndex(categories, categoryName) {
  const categoryIndex = categories.findIndex(category => category.name === categoryName);
  return categoryIndex;
}