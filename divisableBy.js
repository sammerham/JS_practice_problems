'use strict'
/* you are given an arr of intergers a and an integer k. you task is to calculate the number od wyas to pick
two different indicies i < j. such that a[i] + a[j] is divisable by k
*/

// (1, 4) sum of (1 + 4) = 5 5 % 5 = 0 meaning they are diviable by 5
// 1% 5 === 1   && 4 % 5 === 4   i need to search in my freq counter for mod of 4   
 
const divisibleBy = (arr, k) => {
  // initiate counter
  let count = 0;     
  // start a freq counter for mod of every num oin given arr;
  const freqCounter = {}

  for (let n of arr) {
    // calculate mod for every num
    let mod = n % k;
    // calculate remainder between k and and mod;
    let left = (k - mod) % k;
    // if in obj increase count
    count += freqCounter[left] || 0

    freqCounter[mod] = freqCounter[mod] + 1 || 1;

  
  }
  return count;

}

console.log(divisibleBy([1, 2, 3, 4, 5], 3)); // 1,2 - 1,5 - 2,4  - 4,5