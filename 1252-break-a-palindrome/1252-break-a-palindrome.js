/**
 * @param {string} palindrome
 * @return {string}
 */
var breakPalindrome = function(palindrome) {
    if (palindrome.length === 1) {
        return ''
    }
    let n = palindrome.length
    let res;
    for (let i = 0; i < (Math.ceil(n / 2)); i++) {
        if(palindrome[i] !== 'a' && i !== n-i-1) {
            res = palindrome.substring(0, i) + 'a' + palindrome.substring(i+1)
            break; 
        }
        if (palindrome[i] !== 'a' && i === n - i -1){
            res = palindrome.substring(0, n -1) + 'b'
            break;
        }
    }
    if (res == undefined) {
        res = palindrome.substring(0, n -1) + 'b'
    }
    return res

};