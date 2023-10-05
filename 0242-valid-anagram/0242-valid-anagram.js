/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    //i: 2 strings
    //o: boolean,
    //c: lowercase
    //e: 
    if (s.length !== t.length) {
        return false
    }
    let map = {}
    for (let c of s) {
        map[c] = (map[c] || 0) + 1
    }
    for (let c of t) {
        if (!map[c]) {
            return false
        }
        map[c] --
        if (map[c] < 0) {
            return false
        }
    }
    return true
};