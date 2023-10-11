/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
 //i：string with characters no numbers
 //o: number present the length of the longest subsring
 //c: 
 //e: !s.length
 //"abbcd" -> bcd => 3
    if (!s.length) {
        return 0
    }
    let left = 0;
    let right = 1;
    let res = 1;
    while (right < s.length) {
        const temp = s.slice(left, right + 1)
        if (new Set(temp).size === temp.length) {
            res = Math.max(res, temp.length)
            right += 1
        } else {
            left += 1
            right = left + 1
        }
    }
    return res
};