/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let tracker = {};
    for (let n of strs) {
        const temp = n.split("").sort().join("");
        if (tracker[temp] === undefined) {
            tracker[temp] = []
        }
        tracker[temp].push(n)
    }
    return Object.values(tracker)
};