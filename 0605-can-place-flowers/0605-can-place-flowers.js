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
    if (n === 1 && flowerbed.length === 1) return flowerbed[0] === 0
    let i = 0;
    while (i < flowerbed.length) {
        const left = i - 1 
        const right = i + 1
        // console.log('i', i)
        if (flowerbed[i] === 0) {
            // console.log('i === 0', flowerbed)
            // console.log('left,', left, flowerbed[left])
            // console.log('right', right, flowerbed[right])
            if (left < 0 && flowerbed[right] === 0
               || right > flowerbed.length - 1 && flowerbed[left] === 0
               || flowerbed[left] === 0 && flowerbed[right] ===0) {
                flowerbed[i] = 1
                n --;
            }
            // if (right > flowerbed.length - 1 && flowerbed[left] === 0) {
            //     flowerbed[i] = 1
            //     n--;
            // } 
            // if (flowerbed[left] === 0 && flowerbed[right] ===0) {
            //     flowerbed[i] = 1;
            //     console.log('changed,' , flowerbed, i)
            //     n --;   
            // }
        }
        i ++;
    }
    console.log('n', n)
    return n > 0 ? false : true
};