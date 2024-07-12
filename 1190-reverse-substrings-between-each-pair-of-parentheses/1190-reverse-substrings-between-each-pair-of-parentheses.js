/**
 * @param {string} s
 * @return {string}
 */
var reverseParentheses = function(s) {
    let stack = [];
    for (let c of s) {
        if (c === ')') {
            let temp = '';
            while (stack.length && stack[stack.length - 1] !== '(') {
                const cur = stack.pop().split('').reverse().join('')
                temp += cur;
            }
            stack.pop();
            stack.push(temp)
        } else {
            stack.push(c)
        }
    }
    return stack.join('')
};