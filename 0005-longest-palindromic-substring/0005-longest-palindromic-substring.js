/**
 * @param {string} s
 * @return {string}
 */
const isPalindorme = (str,l, r) => {
    while (l < r) {
        if (str[l] !== str[r]) { 
            return false
        }
        l++;
        r--;
    }
    return true
}

var longestPalindrome = function(s) {

    let maxLen = 1;
    let res = s[0]
    for (let i = 0; i < s.length - 1; i++) {
        for (let j = s.length -1 ;j > i; j--) {
       
            if (isPalindorme(s, i, j)) {
               
                if (j - i + 1> maxLen) {
                    maxLen = j - i +1;
                    res = s.substring(i, j+1)
                }
            }
        }
    }
  
    return res
};