/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let res = new Array(nums.length).fill(1)
    let before = 1
    let after = 1
    for (let i = 0; i < nums.length; i++) {
        res[i] *= before
        before *= nums[i]
        res[nums.length - i - 1] *= after
        after *= nums[nums.length- i -1]
    }
    return res

};