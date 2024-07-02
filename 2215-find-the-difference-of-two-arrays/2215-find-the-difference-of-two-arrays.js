/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    nums1 = new Set(nums1);
    nums2 = new Set(nums2);
    for (let n of nums1) {
        if (nums2.has(n)) {
            nums2.delete(n)
            nums1.delete(n)
        }
    }
    return [[...nums1], [...nums2]]
};