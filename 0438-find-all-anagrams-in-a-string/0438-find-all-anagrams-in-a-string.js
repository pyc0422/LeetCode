/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    let res = [];
    if (s.length < p.length) {
        return res
    }
    let map = {}
    for (let elem of p) {
        map[elem] = (map[elem] | 0) + 1
    }
    let temp = {...map};
    let left = 0; 
    let right = 0;
    let len = p.length;
    while (right < s.length) {
        if (temp[s[right]] === undefined) {
            len = p.length;
            temp= {...map};
            right ++;
            left = right;
        } else if (temp[s[right]] > 0) {
            temp[s[right]] --;
            right ++;
            len --;
        } else if (temp[s[right]] <= 0) {
            left ++;
            right = left;
            len = p.length;
            temp = {...map};
        }
        if (len === 0) {
            res.push(left)       
            temp = {...map};
            len = p.length;
            left ++;
            right = left;
        }

    }
    return res;
};