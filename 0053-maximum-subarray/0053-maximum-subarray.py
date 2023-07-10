class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        #i: list with numbers
        #o: number: largest sum of the subarray
        #c:
        #e:
       #slide window
        res = nums[0]
        temp = 0
        for n in nums:
            if temp < 0:
                temp = 0
            temp += n
            res = max(res, temp)
        return res

                