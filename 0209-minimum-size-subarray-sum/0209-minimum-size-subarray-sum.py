class Solution:
    def minSubArrayLen(self, target: int, nums: List[int]) -> int: 
        length = len(nums)
        i,j = 0, 0
        min_len = None
        cur_sum = 0
        while j < length:
            cur_sum += nums[j]
            while cur_sum >= target:
                if min_len == None:
                    min_len = j - i + 1
                else:
                    min_len = min(min_len, j-i+1)
                cur_sum -= nums[i]
                i += 1
            j += 1
        return min_len or 0