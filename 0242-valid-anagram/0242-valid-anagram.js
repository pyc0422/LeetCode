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
    for (let i = 0; i < s.length; i ++) {
        map[s[i]] = (map[s[i]] || 0) + 1
    }
    for (let j = 0; j < t.length; j++) {
        if (map[t[j]] === undefined) {
            return false
        }
        map[t[j]] --;
        if (map[t[j]] < 0) {
            return false
        }
    }
    return true
};