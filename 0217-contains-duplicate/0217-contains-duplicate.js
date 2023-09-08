/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    //i: array with nums
    //o: boolean
    //c:
    //e: empty array
    let nums_set = new Set(nums)
    return nums_set.size !== nums.length

    
};