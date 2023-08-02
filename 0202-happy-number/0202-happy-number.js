/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    
    const calSum = (nums) => {
        let sum = 0;
        while (nums > 0) {
            let cur = nums % 10
            sum += (cur * cur)
            nums = Math.trunc(nums / 10)
        }
        return sum
    }
    if (n === 1) {
        return true
    }
    if (n === 0) {
        return false
    }
    let obj ={}
    while (!obj[n]) {
        obj[n] = 1;
        n = calSum(n)
    }
    return n === 1 
};