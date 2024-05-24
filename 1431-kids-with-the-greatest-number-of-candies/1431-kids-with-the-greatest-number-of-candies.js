/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    // i: array with int present kids with candies, and int 
    // o: array with boolean value present if the previous value + extra int will be the largest in the array
    // c: extraCandies >= 1, <=50, candies.length >= 2, <= 100
    // e:
    
    // current largest element in candies
    let largest = Math.max(...candies);
    // result
    let res = []
    for (let i = 0; i < candies.length; i++) {
        if (candies[i] + extraCandies >= largest) {
            res.push(true)
        } else {
            res.push(false)
        }
    }
    return res;
};