/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    //i : int
    //0: int reverse the digits
    //c: 
    //e: output's range signed 32-bit integer, return0
    const res_min = -Math.pow(2, 31);
    const res_max = Math.pow(2, 31) - 1;
    
    let isNagtive = false
    if (x < 0) {
        x = Math.abs(x)
        isNagtive = true
    }

    let res = ''
    while(x > 0) {
        const cur = x % 10
        res += (cur + '')
        x = Math.floor(x / 10)
    }
    res = isNagtive ? -Number(res) : Number(res)
    if (res_min < res && res < res_max) {
        return res
    } else {
        return 0
    }
};