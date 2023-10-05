/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    //i:string
    //o:boolean
    //c: change to lowercase,remove all the non-alphanumeric
    //e: s.length = 0
    if (s.length <= 1) {
        return true;
    }
    var str = s.match(/[a-zA-Z0-9]/g);
    if (!str) {
        return true;
    }
    var clearStr = str.map(l => l.toLowerCase());
    var left = 0;
    var right = clearStr.length - 1;
    while (left <= right) {
        if (clearStr[left] !== clearStr[right]) {
            return false;
        }
        left ++;
        right --;
    }
    return true;
};