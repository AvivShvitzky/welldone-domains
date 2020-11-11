
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


/**
* returns a deep copy of an array.
* @param {Array} array
* @returns a deep copy of an array.
*/
export function deepCopyArray(array) {
  const copiedArray = JSON.parse(JSON.stringify(array))
  return copiedArray;
}


/**
* allows the parent div to fire a click event seperate from his childs.
* @param {Event} event
* @param {String} pageName
* @returns a deep copy of an array.
*/
// 
export function allowParentEvent(event, pageName, cb) {
  event.preventDefault();
  if (event.target === event.currentTarget) {
    cb(pageName)
  }
}