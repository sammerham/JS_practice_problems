'use strict';

function countUniqueValues(arr) {
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  // return i + 1;
  return arr

 }
//o(n)                           1i           1j
console.log(countUniqueValues([1, 1, 1, 1, 1, 2]))
console.log(countUniqueValues([1, 1, 2]))