/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
    // i：array of int
    // o: boolean if triple
    // c: nums.length > 0, nums[i] - or +
    // e: /
    let first = Infinity;
    let second = Infinity;
    for (let third of nums) {
        if (third < first) {
            first = third;
        } else if (third > first && third > second) {
            return true;
        } else if (third > first && third < second) {
            second = third;
        }
    }
    return false
};