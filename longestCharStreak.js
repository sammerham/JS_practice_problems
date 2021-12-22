'use strict'
const longestCharStreak = str => {
  let longestStr = '';
  let currentStr = '';
  for (let i = 0; i < str.length; i++) {
    let currChar = str[i];
    let prevChar = str[i - 1];
    if (currChar === prevChar) { 
      currentStr += currChar;
    } else {
      currentStr = currChar;
    }
    if (currentStr.length >= longestStr.length) { 
      longestStr = currentStr;
    }
  }
  return longestStr;
}
console.log(longestCharStreak('a')); // => 'a'
console.log(longestCharStreak('accccbbb')); // => 'cccc'
console.log(longestCharStreak('aaaxyyyyyzz')); // => 'yyyyy
console.log(longestCharStreak('aaabbb')); // => 'bbb'
console.log(longestCharStreak('abc')); // => 'c'