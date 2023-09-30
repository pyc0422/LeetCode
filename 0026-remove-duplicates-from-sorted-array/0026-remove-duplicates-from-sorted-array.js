/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
      let i = 1;
      let count = 1
      while (i < nums.length && nums[i] !== '_') {
          const cur = nums[i];
          if (nums[i] === nums[i - 1]) {
              nums.splice(i, 1);
              nums.push('_');
           
          } else {
              count ++;
              i ++;
          }
          
      }

      return count;
};