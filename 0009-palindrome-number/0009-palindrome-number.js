/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    //i: integer (n && p)
    //o: boolean (palindorme = ture)
    //c: 
    //e: 
    if (x < 0) {
        return false
    }
    if (x < 10) {
        true
    }
    x = x.toString()
    let left = 0;
    let right = x.length -1;
    while (left < right) {
        if(x[left] !== x[right]) {
            return false
        }
        left ++;
        right --;
    }
    return true
};