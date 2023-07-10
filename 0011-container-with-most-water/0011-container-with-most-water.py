class Solution:
    def maxArea(self, height: List[int]) -> int:
        res = 0
        left = 0
        right = len(height) - 1
        while left < right:
            cur_h = min(height[left], height[right])
            cur_l = right - left
            cur_storage = cur_h * cur_l
            res = max(res, cur_storage)
            if height[left] < height[right]:
                left += 1
            else:
                right -= 1
        return res