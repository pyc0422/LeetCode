/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    //i:string
    //o:boolean
    //c: change to lowercase,remove all the non-alphanumeric
    //e: s.length = 0
  let newStr = s.replace(/[^a-z0-9]/gi,"").toLowerCase();
  let left = 0
  let right = newStr.length - 1
  while (left <= right){
     if (newStr[left] !== newStr[right]) {
    	return false 
    }
    left ++
    right --
  }
  return true

};