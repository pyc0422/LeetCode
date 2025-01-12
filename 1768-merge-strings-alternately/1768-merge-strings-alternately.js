/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let res = ''
    let i = 0
    while(i < word1.length && i < word2.length) {
        res = res + word1[i] + word2[i]
        i ++
    }
    if (i < word1.length) {
        res = res + word1.substring(i)
    }
    if ( i < word2.length){
        res += word2.substring(i)
    }
    return res
};