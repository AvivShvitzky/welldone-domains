/**
* allows the parent div to fire a click event seperate from his childs.
* @param {Event} event
* @param {String} pageName
* @param {Function} cb
*/
// 
export function isParentEvent(event) {
  event.preventDefault();
  if (event.target === event.currentTarget) {
    return true
  }
  return false
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