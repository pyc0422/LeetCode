/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    nums1 = new Set(nums1);
    nums2 = new Set(nums2);
    let res = [];
    for (let n of nums1) {
        if (nums2.has(n)) {
            nums2.delete(n)
            nums1.delete(n)
        }
    }
    // for (let n of nums2) {
    //     if (nums1.has(n)) {
    //         nums1.delete(n)
    //     }
    // }
    return [Array.from(nums1), Array.from(nums2)]
};