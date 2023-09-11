/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    // i: nested array and a flatter array present new interval
    // o: return a nested array inseert new one
    // c:
    // e:
    let res = [newInterval];
    for (let i = 0; i < intervals.length; i++) {
        const last = res.pop();
        const cur = intervals[i]
        if (last[1] < cur[0]) {
            res.push(last);
            res.push(cur)
        } else if (last[0] > cur[1]) {
            res.push(cur)
            res.push(last)
        } else {
            res.push([Math.min(last[0], cur[0]), Math.max(last[1], cur[1])])
        }
    }
    return res
};