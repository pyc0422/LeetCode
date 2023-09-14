/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    let res = []
    intervals = intervals.sort((a,b) => (a[0] - b[0]))

    for (let i = 0; i < intervals.length; i++) {
        const cur = intervals[i]
        const len = res.length
        if (!len){
            res.push(cur)
    
        
        }else if (cur[0] < res[len-1][0] ){
             if (cur[1] >= res[len-1][1]) {
                res[len-1] = cur
            } else {
                res[len-1][0] = cur[0]
            }
        } else if (cur[0] <= res[len-1][1]) {
            if (cur[1] > res[len-1][1]) {
                res[len-1][1] = cur[1]
            }    
        } else if (cur[0] >= res[len-1][1]){
            res.push(cur)
        }
    }
    return res;
};