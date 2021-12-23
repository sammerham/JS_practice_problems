'use strict'
let arr = [1, 2, 4, 4, 6, 7, 8, 99]
const maxSubArrSum = (arr, n) => { 
  let tempSum = 0;
  let maxSum = 0;
  for (let i = 0; i < n; i++) {
    tempSum += arr[i];
  }
  for (let j = n; j < arr.length; j++) {
    tempSum = (tempSum - arr[j - n]) + arr[j];
    maxSum = Math.max(tempSum, maxSum);
  }
  return maxSum;
}
console.log(maxSubArrSum(arr, 2))