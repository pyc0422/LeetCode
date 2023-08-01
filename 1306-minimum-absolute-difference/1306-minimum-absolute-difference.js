/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function(arr) {
    arr.sort((a,b) => a-b );
    console.log(arr)
    let res = [];
    let min = Math.abs(arr[1] - arr[0]);
    for (let i = 0; i < arr.length - 1; i++) {
        let temp = Math.abs(arr[i + 1] - arr[i]);
        min = Math.min(temp, min) 
    }
    for (let i = 0; i < arr.length -1; i++) {
        let temp = Math.abs(arr[i + 1] - arr[i])
        if (temp === min) {
            res.push([arr[i], arr[i + 1]])
        }
    }
    return res;
};