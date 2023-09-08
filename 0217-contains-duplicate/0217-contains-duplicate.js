/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    //i: array with nums
    //o: boolean
    //c:
    //e: empty array
    let map = {}
    for (let n of nums) {
        if (map[n]) {
            return true
        }
        map[n] = 1
    }
    return false

    
};