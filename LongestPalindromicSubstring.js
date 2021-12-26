'use strict'

// const expandFromCenter = (str, left, right) => {
//   let i = 0;
//   while (str[left - i] && str[left - i] === str[right + i]) {
//     i++;
//   }
//   i--;
//   return str.slice(left - 1, right + 1 + 1);
// }

// const LongestPalindromicSubstring = str => {
//   // edge case
//   if (str.length < 1) return "";
//   let longest = '';
//   for (let i = 0; i < str.length; i++) {
//     let oddPalindrome = expandFromCenter(str, i, i);
//     let evenPalindrome = expandFromCenter(str, i - 1, i);


//     // get longer 
//     if (oddPalindrome.length > longest.length) longest = oddPalindrome;
//     if (evenPalindrome.length > longest.length) longest = evenPalindrome;
//   }
//   return longest;
// }

const expandFromCenter = (str, start, end) => {
  while (start >= 0 && end < str.length && str[start] === str[end]) {
    start--;
    end++
  }
  return str.substring(start + 1, end); // same as slice
}

const longestPalindromicSubstring = str => {
  let longest = '';
  for (let i = 0; i < str.length; i++) {
    let oddPalindrom = expandFromCenter(str, i, i);
    let evenPalindrom = expandFromCenter(str, i, i + 1);

    if (oddPalindrom.length > longest.length) longest = oddPalindrom;
    if (evenPalindrom.length > longest.length) longest = evenPalindrom;
  }
  return longest;
}




console.log(longestPalindromicSubstring('babad'))


