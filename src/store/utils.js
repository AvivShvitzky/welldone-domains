
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
* checks if a category exists on the categories list.
* @param {Array} categories
* @param {String} categoryName
* @returns if the category exists on the categories list.
*/
export function categoryExists(categories, categoryName) {
  return findCategoryIndex(categories, categoryName) !== -1
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