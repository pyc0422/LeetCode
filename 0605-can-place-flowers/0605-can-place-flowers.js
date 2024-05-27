/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    // i: array of 0,1 which 0,1 not next to each other, int n
    // o: boolean indicate if the n flower can be planted under the rule
    // c: array length >= 1
    // e: n == 0
    if (n === 0) return true;

    for(let i = 0; i < flowerbed.length; i++) {
        const left = i - 1 < 0 ? 0 : flowerbed[i - 1] 
        const right = i + 1 > flowerbed.length -1 ? 0 : flowerbed[i+1]
        if (left + flowerbed[i] + right === 0) {
            flowerbed[i] = 1;
            n--;
        }
    }
    return n <= 0
};