/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    // i：unsorted i arr
    // o: n-> length of the longest consecutive elem seq
    // c: O(n)
    // e: input length = 0
    const len = nums.length
    if (len < 2) {
        return len
    }
    const sorted = nums.sort((a,b) => a -b)
    let temp = 1;
    let res = 1
    for (let i = 0; i < sorted.length -1 ; i++){
        const differ = sorted[i + 1] - sorted[i]
        if (differ === 1){
            temp ++
        } else if (differ > 0){
            res = Math.max(res, temp)
            temp = 1;
        }
    }
    return Math.max(res, temp);

};