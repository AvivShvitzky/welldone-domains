
/**
* searches for a category with a given name.
* @param {String} categoryName
* @returns the index of the found category. If none, it returns -1.
*/
export function findIndexByName(array, itemName) {
  const ItemIndex = array.findIndex(item => item.name === itemName);
  return ItemIndex;
}

/**
* checks if a category exists on the categories list.
* @param {Array} categories
* @param {String} categoryName
* @returns if the category exists on the categories list.
*/
export function EntityExists(entityList, EntityName) {
  return findIndexByName(entityList, EntityName) !== -1
}
