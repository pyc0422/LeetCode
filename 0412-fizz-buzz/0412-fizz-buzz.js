/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    //i: integer (p)
    //o: array combines numbers and string
    //c: interge are positive
    //e: 
    // n = 3
    // iterate each number from 1-3
    let res = []
    for (let i = 1; i < n+1; i++) {
    //      check the num if number/ 3 and /5
        if (i % 3 === 0 && i % 5 === 0) {
            res.push('FizzBuzz') 
        } else if (i % 3 === 0) {
            res.push('Fizz')
        } else if (i % 5 === 0) {
            res.push('Buzz')
        } else {
            res.push(i.toString())
        }
    //          return FizzBuzz
    //       else if number / 3
    //          return Fizz
    //      else if number / 5
    //          return Buzz
    //      else 
    //          return nums
    }
    return res
    //  i     return
    //  1       1
    //  2       2
    //  3       Fizz
};