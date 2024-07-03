/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function(nums, k) {
    // i: array nums and int k
    // o: int
    // c: nums.length > 1 k>1 nums[i] >1
    // e:duplicate element
    nums.sort((a,b) => a-b)
    let left = 0;
    let right = nums.length - 1;
    //let res = new Set()
    let res = 0
    while (left < right) {
        const tempSum = nums[left] + nums[right];
        if (tempSum === k) {
            //res.add([nums[left], nums[right]]);
            res ++;
            left ++;
            right --;
        } else if (tempSum > k) {
            right --
        } else {
            left ++;
        }
    }
    return res
};