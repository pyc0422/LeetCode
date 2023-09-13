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
    let temp = []
    let helper = (index, total) => {
        if (total > target) {
            return
        }
        if (total === target) {
            res.push([...temp])
            return
        }
        for (let i = index; i < candidates.length; i++) {
            if (candidates[i] <= target) {
                temp.push(candidates[i])
                helper(i, total + candidates[i])
                temp.pop()
            }

        }
    }
    helper(0,0)
    return res;
    
};