'use strict';

const frequenceyCounter = str => {
  let counter = {};
  for (let char of str) {
    counter[char] = counter[char] + 1 || 1;
  }
  return counter;
}

console.log(frequenceyCounter('Simonyahman'))