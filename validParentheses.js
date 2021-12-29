'use strict'

const validParentheses = str => {
  // can get the same result with obj
  let brackets = new Map([['(', ')'], ['{', '}'], ['[', ']']]);
  let stack = [];
  for (let char of str) {
    if (brackets.has(char)) { // if left brackets;
      stack.push(char) // add it to stack
    } else { // otherwise it is  a right bracket
      let pLeft = stack.pop(); // get the previous left from stack // last item in your stack to gurantee the order
      if (brackets.get(pLeft) !== char) {  // check if previous left's corrosponding right == current right
        return false;
      }
    }
  }
  return stack.length === 0;
}