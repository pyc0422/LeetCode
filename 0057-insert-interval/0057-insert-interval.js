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
    let [start, end] = newInterval;
    const left = [];
    const right = [];
    for (let item of intervals) {
        if (item[0] > end) {
            right.push(item)
        } else if (item[1] < start) {
            left.push(item)
        } else {
            start = Math.min(item[0], start);
            end = Math.max(item[1], end);
        }
    }
    return [...left, [start, end], ...right]
}