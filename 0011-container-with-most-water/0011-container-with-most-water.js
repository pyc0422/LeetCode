/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    const calWater = (left, right, distant) => {
        const h = Math.min(right, left);
        return h * distant
    }
    let l= 0;
    let r = height.length - 1;
    let res = 0;
    while (l < r ) {
        const temp = calWater(height[l], height[r], r-l)
        res = Math.max(res, temp)
        if (height[l] <height[r]) {
            l ++
        } else {
            r --
        }
    }
    return res

};