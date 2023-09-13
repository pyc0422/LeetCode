/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    let res = []
    if (candidates.length === 1 && candidates[0] > target) {
        return []
    }
    let helper = (index, total, temp) => {
        if (total > target) {
            return
        }
        if (total === target) {
            res.push(temp)
            return
        }
        for (let i = index; i < candidates.length; i++) {
            if (candidates[i] <= target) {
                helper(i, total + candidates[i], [...temp, candidates[i]])
            }

        }
    }
    helper(0,0, [])
    return res;
    
};