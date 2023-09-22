/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    if (tokens.length <= 1) {
        return tokens
    }
    let stack = []

    for (let op of tokens) {
        
        if (op === '+'){
           stack.push(stack.pop() + stack.pop())
        } else if (op === '-') {
           stack.push(-stack.pop() + stack.pop())
        } else if (op === '*') {
           stack.push(stack.pop() * stack.pop())
        } else if (op === '/') {
           stack.push(Math.trunc(1/ (stack.pop() / stack.pop())))
      
        } else {
           stack.push(Number(op))
        }
    }
    return stack.pop();

};