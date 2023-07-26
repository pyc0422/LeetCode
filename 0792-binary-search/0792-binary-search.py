class Solution:
    def search(self, nums: List[int], target: int) -> int:
        left, right = 0, len(nums)-1
        res = -1
        while left <= right:
            mid = (left + right) // 2
     
            if nums[mid] == target:
                res = mid
                return res
            if target < nums[mid]:
                right = mid - 1
            else:
                left = mid + 1
        return res
