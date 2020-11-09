
/**
* searches for a category with a given name.
* @param {String} categoryName
* @returns the index of the found category. If none, it returns -1.
*/
export function findCategoryIndex(categories, categoryName) {
  const categoryIndex = categories.findIndex(category => category.name === categoryName);
  return categoryIndex;
}

/**
* returns a deep copy of an array.
* @param {Array} array
* @returns a deep copy of an array.
*/
export function deepCopyArray(array) {
  const copiedArray = JSON.parse(JSON.stringify(array))
  return copiedArray;
}