/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    let res = []
    for (let i = 0; i <= n; i ++) {
        const biStr = i.toString(2)
        const count = biStr.split('').filter(num => num === '1').length
        res.push(count)
    }
    return res;
};