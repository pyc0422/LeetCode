/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {
    const vowels = 'aeiou'.split("")

    let count = s.slice(0, k).split("").filter(c => vowels.includes(c)).length;
    let res = count;

    for(let i = k; i < s.length; i++) {
        if (vowels.includes(s[i])) {
            count ++;
        }
        if (vowels.includes(s[i - k])) {
            count --;
        }
        res = Math.max(res, count);
    }
    return res;
};