class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        #i: string 
        #o: number represent the length of the longest substring without repeating charactoers
        #c: s consists of letter/digits/symbols and spaces
        #e: if input string length = 0 
        #handle the edge case
        if len(s) == 0:
            return 0
        res = 1
        left = 0
        right = 1

        while right < len(s):
            cur = s[left: right + 1]
            if len(set(cur)) == len(cur):
                if len(cur) > res:
                    res = len(cur)
                right += 1
            else:
                left += 1
                right = left + 1
        return res
