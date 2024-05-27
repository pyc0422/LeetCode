/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    // i: string contains vowels
    // o: string reverse the vowels
    // c: 1<= s.length <= 3 * 105, upper lower?
    // e: no vowel
    // create a array store all vowels
    const vowels = 'aeiou'.split("").concat('AEIOU'.split(""))
    // iterate the string find all vowels
    let left = 0;
    let right = s.length -1;
    s = s.split("")
    while (left <= right) {
        const temp_left = vowels.indexOf(s[left]);
        const temp_right = vowels.indexOf(s[right]);
        if (temp_left > -1 && temp_right > -1) {
            const temp = s[left]
            s[left] = s[right]
            s[right] = temp
            left ++;
            right --;
        }
        if (temp_right === -1 ) {
            right --;
        } 
        if (temp_left === -1) {
            left ++;
        } 
    }
    return s.join("");
};
