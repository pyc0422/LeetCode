/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    // i: array with char
    // o: int the length of the new input array
    // c: chars.length >= 1, space O(1)
    // e: 
    let read = 0;
    let write = 0;
    while (read < chars.length) {
        let count = 0;
        const cur = chars[read];
        while (read < chars.length && chars[read] === cur ) {
            count ++
            read ++;
        }
        console.log(read, write, chars, cur)
        chars[write] = cur;
        write ++;
        if (count > 1) {
            const s = count.toString();
            for(let j = 0; j < s.length; j++) {
                chars[write] = s[j];
                write ++;
            }
           
        }
        //read = read + i;
        
    }
    console.log(write, chars)
 
    return write;
};