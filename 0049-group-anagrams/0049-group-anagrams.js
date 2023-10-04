/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    // i: array of strs
    // o: nested array, inner array should be all of anagrams
    // c: lower case or uppercase? length?
    // e: only one elem in the input or empty array
    // ['abc', 'cba', 'catt', 'bca', 'ctat']
    // [['abc','cba','bca'], ['catt', 'ctat]]
    // variable store a map of different anagram
    let map = {}
    //iterate the strs
    for (let str of strs) {
        //sort each str in same method
        const cur = str.split("").sort().join("")
        //check if the sorted string is already exists in the map or not
        if (map[cur] === undefined) {
            map[cur] = []
        }
        map[cur].push(str)
    }
    // get the values list of the map 
    return Object.values(map)
};