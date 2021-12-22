// Write a function longestLetterStreak(str, searchLetters) that takes in 2 arguments:
//  - str: A string of uppercase characters.
//  - searchLetters: An array of uppercase single-character strings (i.e ["A", "F", "K"])

// The function should return the length of the longest streak of letters (consecutive
// letters) in the `str` that are in the `searchLetters`.

// Note that a streak does not have to consist of the same letter repeated, a streak
// just needs to contains letters from the `searchLetters` array.

// Examples:

// longestLetterStreak("ACCA", ["C"]); // => 2
// longestLetterStreak("YACCADCA", ["C", "A"]); // => 4
// longestLetterStreak("ZTKZQRKKZ", ["Z", "K", "Y"]); // => 3
// longestLetterStreak("YYYYY", ["Z", "K", "Y"]); // => 5
// *******************************************************************************/

// const longestLetterStreak = (str, searchLetters) => { 
//   let currStr = '';
//   let longestStr = '';
//   for (let i = 0; i < str.length; i++){
//     let currChar = str[i];
//     let prevChar = str[i - 1];
//     if (searchLetters.includes(currChar) && searchLetters.includes(prevChar)) { 
//       currStr += currChar;
//     } else {
//       currStr = currChar;
//     }

//     if (currStr.length >= longestStr.length) { 
//       longestStr = currStr;
//     }
//   }
//   return longestStr.length;
// }

// another appraoch
const longestLetterStreak = (str, searchLetters) => {
  let curr = 0;
  let max = 0;
  for (let i = 0; i < str.length; i++) {
    let currChar = str[i];    
    if (searchLetters.includes(currChar)) {
      curr ++
    } else {
      curr = 0;
    }
    if (curr > max) {
      max = curr;
    }
  }
  return max;
}


console.log(longestLetterStreak("ACCA", ["C"])); // => 2
console.log(longestLetterStreak("YACCADCA", ["C", "A"])); // => 4
console.log(longestLetterStreak("ZTKZQRKKZ", ["Z", "K", "Y"])); // => 3
console.log(longestLetterStreak("YYYYY", ["Z", "K", "Y"])) // => 5