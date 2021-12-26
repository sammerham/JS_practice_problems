'use strict'
// sliding window

const lengthOfLongestSubst = str => {
  if (str.length === 0) return 0;
  if (str.length === 1) return 1;
  let count = 0;
  let tempStr = '';
  let longestStr = '';
  // make two pointers for window;
    // start idx of window
  let i = 0;
    // end idx of window
  let j = 0;
  // make new set to save seen or visited chars as my WINDOW
  let set = new Set();
  let len = str.length;
  // iterate over given str
  while (i < len) {
    let char = str[j];
    // check if you have seen that char before
    if (!set.has(char)) { // if not
      // add it to set
      set.add(char);
      // move end counter
      j++;
      // update counter 
      count = Math.max(count, j - i)// difference between begining and end of window
    } else {  // otherwise
      // delete first char from set to move window
      set.delete(str[i]);
      i++;
      // increment begining of window
    }
  }
  return count;
}

console.log(lengthOfLongestSubst('abcabcbb'))