'use strict'
const roman = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
}
const romanToInt = s =>  {
  let result = 0;
  for (let i = 0; i < s.length; i++) {
    let curr = roman[s[i]];
    let next = roman[s[i + 1]];
    if (curr < next) {
      result += (next - curr) // V - I (5 -4)
      i++ // skip this loop since i used both chars;
    } else {
      result += curr;
    }
  }
  return result;
};


/**
 Input: s = "III"
Output: 3
Explanation: III = 3.
Example 2:

Input: s = "LVIII"
Output: 58
Explanation: L = 50, V= 5, III = 3.
Example 3:

Input: s = "MCMXCIV"
Output: 1994
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
 */