class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        #i：list with price
        #o: num - maximum differ i can find

        left = 0
        right = 1
        res = 0
        while left > right or right < len(prices):
            temp = prices[right] - prices[left]
            if temp <= 0:
                left = right
                right = left + 1
            elif temp > 0:
                if temp > res:
                    res = temp
                right += 1
        return res   