'use strict'
/**
 *Let's say a triple (a, b, c) is a zigzag if either a < b > c or a > b < c.
Given an array of integers numbers, your task is to check all the triples of its consecutive 
elements for being a zigzag. More formally, your task is to construct an array of length numbers.length - 2, 
where the ith element of the output array equals 1 if the triple (numbers[i], 
numbers[i + 1], numbers[i + 2]) is a zigzag, and 0 otherwise.
 */

const checkZigZag = (n1, n2, n3) => {
  let first = n1 < n2 && n2 > n3;
  let second = n1 > n2 && n2 < n3;
  if (first || second) return true;
  return false;
}

const zigzag = arr => {
  let results = [];
  let tempWindow = [];
  for (let i = 0; i < 3; i++) {
    tempWindow.push(arr[i]);
  }
  checkZigZag(...tempWindow) ? results.push(1) : results.push(0);

  for (let j = 3; j < arr.length; j++){
    // tempWindow = arr.slice( j - 3 + 1, j + 1);
    // tempWindow = tempWindow.slice(1).concat(arr[j]);
    tempWindow = [...tempWindow.slice(1), arr[j]];
    // tempWindow = [tempWindow[1], tempWindow[2], arr[j]]
    checkZigZag(...tempWindow) ? results.push(1) : results.push(0);
  }

  return results
}
                            
console.log(zigzag([1, 2, 1, 3, 4]))
console.log(zigzag([1, 2, 3, 4]))
console.log(zigzag([1000000000, 1000000000, 1000000000]))



