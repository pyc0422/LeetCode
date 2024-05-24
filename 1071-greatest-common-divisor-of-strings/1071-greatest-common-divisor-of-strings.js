/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    // i:2 string str1 = x * n str2= x * m
    // o:string or empty string
    // c: input length > 0, all input are upercase 
    // e: no x return ""
    if (str1 + str2 !== str2 + str1) {
        return ""
    }
    const len1 = str1.length;
    const len2 = str2.length;
    const helper = (l1, l2) => {
        if (!l2) {
            return l1
        }
        return helper(l2, l1 % l2)
    }
    const div = helper(len1, len2)
    return str1.slice(0, div)
    
};


//str1 = 'AAAAAA' str2 ='AAA' "AAA"
// str1 = 'BBB' str2 ="BB" "B"