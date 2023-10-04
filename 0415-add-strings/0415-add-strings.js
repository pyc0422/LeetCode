/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    // i: 2 string present nteger(p) > 0
    // o: string that present the sum of the inputs
    // c: cannot convert the input to numbers
    // e:
    // num1 = "123" num2="17"
    // res = "140"
    // create a variable to 
    let res = []
    //find the shortest input first
    num1 = num1.split("")
    num2 = num2.split("")
    // iterate both num1 from the last c to the fisrt
    let remind = 0
    while (num1.length || num2.length) {
        const n1 = num1.pop() || '0'
        const n2 = num2.pop() || '0'
        let temp = remind + Number(n1) + Number(n2)
        remind = 0
        if (temp < 10) {
            res.unshift(temp.toString())
        } else {
            //deal with the sum larger than 10
            temp = temp.toString()
            res.unshift(temp[1])
            remind = Number(temp[0])
        }
    }
    //add the rest charecto to the begining of the result
    if (remind > 0) {
        res.unshift(remind.toString())
    }
    return res.join("")
};