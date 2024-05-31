/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    // i: string with words and spaces
    // o: string with reversed words and single spaces between words
    // c: s.length >= 1, contains digits and mixed upper or lower case and spaces
    // e: with leading or multiple spaces between wrods
    let res = []
    let temp = ''
    for (let letter of s) {
        if (letter !== ' ') {
            temp += letter
        } else if (letter === ' ' && temp.length) {
            res.push(temp)
            temp = ''
        }
    }
    if (temp.length) {res.push(temp)}
    // console.log('res', res)
    return res.reverse().join(" ")
};

// reverseWords('apple banna') // 'banna apple'
// reverseWords(' Apple bananas  ')// 'bananas Apple'