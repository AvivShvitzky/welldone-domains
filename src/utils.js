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