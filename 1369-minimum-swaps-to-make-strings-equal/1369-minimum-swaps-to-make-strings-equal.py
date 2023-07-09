class Solution:
    def minimumSwap(self, s1: str, s2: str) -> int:
        #i: 2 strings with equal length only contain 'x' and 'y'
        #o: number represent the minimum swaps count / -1 if impoosible
        #c: swap between 2 strings
        #e: if no solution return -1
        x_y = 0
        y_x = 0
        for i in range(len(s1)):
            if s1[i] == 'x':
                if s1[i] != s2[i]:
                    x_y += 1
            elif s1[i] == 'y':
                if s1[i] != s2[i]:
                    y_x += 1
        print (x_y, y_x ,(x_y + y_x) % 2)        
        if x_y == 0 and y_x == 0:
            return 0
        if (x_y + y_x) % 2 != 0:
            return - 1
        res = x_y // 2 + y_x // 2
        print(res)
        if x_y % 2 == 1:
            res += 2
        return res