'use strict'
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
const findSubStr = (haystack, needle) => {

  let left = 0;
  let right = needle.length;

  while (right <= haystack.length) {
    if (haystack.slice(left, right) == needle) {
      return left;
    } else {
      left++;
      right++;
    }
  }
  return -1;
}
  /*
  another 4 solutions

  1 - return haystack.indexOf(needle)
  2 - 
  let strSplit = haystack.split(needle);
  console.log(strSplit) //[ 'he', 'o' ]
  return strSplit.length === haystack.length ? -1 : strSplit[0].length;
  
  3- 
  
  let match = haystack.match(needle);
  console.log(match);  // [ 'll', index: 2, input: 'hello', groups: undefined ]
  return match.index;
*/

console.log(findSubStr('hello', 'll'));