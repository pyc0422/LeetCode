/**
 * @param {string} s
 * @return {number}
 */
var secondsToRemoveOccurrences = function(s) {
    let count = -1;
    let n = s.length;
    let index;
    while(index !== -1) {
        index = s.indexOf('01')  
        s = s.replaceAll('01', '10');
        count ++;
        
        // console.log('replace:', s, count, index)
    }
    return count;
};