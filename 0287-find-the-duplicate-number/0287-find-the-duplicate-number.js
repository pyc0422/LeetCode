/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    let map = {}
    for (const n of nums) {
        if (map[n] !== undefined) {
            return n
        }
        map[n] = 1
    }

};