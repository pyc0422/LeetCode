/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    //i: array of strings
    //o: prefix(string) each strings contains is at the begining
    //c: 
    //e: if no common prefix
   //iterate the strs, find the shortest str
    let shortest = strs[0].split("")
    for (let i = 1; i < strs.length; i ++) {
        if (strs[i].length < shortest.length) {
            shortest = strs[i].split("")
        }
    }

    for (let str of strs) {
        for(let k = 0; k < shortest.length; k++) {
            if (str[k] !== shortest[k]) {
                console.log('e',shortest)
                shortest.splice(k)
                break;
            }
        }      
    }
    return shortest.join('')
};