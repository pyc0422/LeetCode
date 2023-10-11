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
        console.log(s)
        return 0
    }
    if (s.length === 1) {
        return 1
    }
    let left = 0
    let right = 1
    let map = {}
    let res = 0
    let temp = 0

    while (right < s.length) {
        if (map[s[left]] === undefined) {
            map[s[left]] = 1
            temp += 1   
        }
        if (map[s[right]] === undefined) {
            map[s[right]] = 1
            temp += 1
            right += 1
            res = Math.max(res, temp)
        } else {
            map = {}
            res = Math.max(res, temp)
            temp = 0
            left += 1
            right = left + 1
        }
    }
    return res
};