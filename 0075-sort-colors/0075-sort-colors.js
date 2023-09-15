/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let map = {}
    if (nums.length < 2) {
        return nums;
    }
    for (let n of nums) {
        map[n] = (map[n] || 0) + 1
    }
    for (let i = 0; i < nums.length; i++) {
        if (map[i] === undefined) {
            map[i] = 0
        }
        if ( i < map[0] ) {
            nums[i] = 0
        } else if (i < (map[0] + map[1])) {
            nums[i] = 1
        } else {
            nums[i] = 2
        }
    }


};