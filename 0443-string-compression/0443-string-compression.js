/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    // i: array with char
    // o: int the length of the new input array
    // c: chars.length >= 1, space O(1)
    // e: 
    let left = 0;
    let right = 1;

    if (chars.length === 1) return 1;
    
    while (right <= chars.length) {
        const count = right - left;
        console.log('start', chars.length, left, right, count)
        if (chars[right] !== chars[left]) {
            if (count > 1) {
                console.log('count larger')
                const s = count.toString()
                for (let num of s) {
                    chars[left + 1] = num;
                    left = left + 1;
                }
                chars.splice(left + 1, count - s.length - 1 );     
                console.log('after:', chars, left,right, count)
            } 
            left += 1;
            right = left + 1;
        } else {
            right ++;
        }
    }
    console.log( right - left)

    // left ++;
    console.log(chars )
    return left+1;
}