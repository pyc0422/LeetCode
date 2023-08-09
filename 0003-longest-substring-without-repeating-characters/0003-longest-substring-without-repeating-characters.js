/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let left = 0;
    let right = 1;
    if (s.length === 0) {
        return 0
    }
    let res = 1
    while (right < s.length) {
        let temp = s.slice(left, right + 1)
        if (new Set(temp).size === temp.length) {
            res = Math.max(res, temp.length)
            right += 1
        } else {
            left += 1
            right = left + 1
        }
    }
    return res;
};