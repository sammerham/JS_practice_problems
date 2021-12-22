'use strict'
let arr = [-4, -3, -2, -1, 0, 1, 5, 10];
const sumZero = arr => { 
  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    let sum = arr[start] + arr[end];
    if (sum === 0) {
      return [arr[start], arr[end]];
    } else if (sum > 0) {
      end--;
    } else {
      start++;
    }
  }
  return undefined;
}

console.log(sumZero(arr))