function twoSum(nums: number[], target: number): number[] {
  let pairs = {}
  for (let i=0; i < nums.length; i++){
    const diff = target - nums[i]
    if (pairs[diff] !== undefined){
        return [i, pairs[diff]]
    }
    pairs[nums[i]] = i
  }
};