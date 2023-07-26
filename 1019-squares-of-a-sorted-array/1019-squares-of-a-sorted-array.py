class Solution:
    def sortedSquares(self, nums: List[int]) -> List[int]:
        left, right = 0, len(nums) - 1
        res = [0] * len(nums)
        cur = len(nums) - 1
        while left <= right and cur >= 0:
            if abs(nums[left]) < abs(nums[right]):
                res[cur] = nums[right] ** 2
                right -= 1
                cur -= 1
            elif abs(nums[left]) >= abs(nums[right]):
                res[cur] = nums[left] ** 2
                left += 1
                cur -= 1
        return res