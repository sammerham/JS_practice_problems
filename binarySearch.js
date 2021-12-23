'use strict'
const arr = [
  -1, 2, 5, 6, 9, 13,
  15, 22, 28, 30, 33, 55,
  66, 99, 232
]
const binarySearch = (arr, n) => {
  let left = 0;
  let right = arr.length - 1;
  let mid = Math.floor((left + right) / 2);
  while (left < right) {
    if (arr[mid] > n) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
    mid = Math.floor((left + right) / 2);
  }
  if (arr[mid] === n) return mid;
  return -1;
}

console.log(binarySearch(arr, 9));