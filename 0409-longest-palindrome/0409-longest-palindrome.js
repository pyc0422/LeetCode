/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    //i: string 
    //o: number (longest palindrome)
    //c: case sensitive
    //e: !s.length
    // abccbefg => bcacb 5
    if (s === s.split("").reverse().join("")) {
        return s.length
    }
    let map = {}
    for (let c of s) {
        map[c] = (map[c] || 0) + 1
    }
    //map = {a:1, b:1, c:4, d:2}
    let res = 0
    for (let k in map) {
        if (map[k] % 2 === 0) {
            res += map[k]
        } else if (map[k] > 1) {
            res += (map[k] - 1)
        } 
    }
    return s.length > res ? res += 1 : res

};