export function tmp(arr, cb) {
  // const copiedArr = JSON.parse(JSON.stringify(arr))
  // copiedArr.forEach(val => cb(val))
  const newArr = [];
  for (let index = 0; index < arr.length; index++) {
    if (cb(arr[index])) {
      newArr.push(arr[index])  
    }
  }
  console.log(newArr);
  return newArr;
  // return copiedArr.forEach(val => cb(val))
  // param: array, cb
  // should return a new array
}