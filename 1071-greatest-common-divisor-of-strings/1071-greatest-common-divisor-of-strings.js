/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    if (str1 + str2!== str2 + str1){
        return ''
    }
    const helper = (len1, len2) => {
        if (!len2) {
            return len1
        }
        return helper(len2, len1 % len2)
    }
    const div = helper(str1.length, str2.length)
    return str1.slice(0, div)
};


//str1 = 'AAAAAA' str2 ='AAA' "AAA"
// str1 = 'BBB' str2 ="BB" "B"