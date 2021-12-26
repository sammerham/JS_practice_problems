'use strict'
'abcabcbb'
const lengthOfLongestSubst = str => {
  let count = 0;
  let i = 0;// begining idx of my sliding widow
  let j = 0; // ending idx of my widown
  // set to keep seen letters
  let seen = new Set();
  while (j < str.length) {
    let char = str[j];
    // if not in my set
    if (!seen.has(char)) {
      // add it to set
      seen.add(char);
      //move left side of window
      j++;
      // update count
      count = Math.max(count, j - i); // difference between left side and right side of my window
    } else { //otherwise
      // delete beginin of sldinig window
      seen.delete(str[i]);
      i++;
      // move left side forward
    }
  }
  return count;
}

console.log(lengthOfLongestSubst('abcabcbb'));