class Solution:
    def originalDigits(self, s: str) -> str:
        #i: string with letter represent numbers
        #o: string with digital
        #c: s guarented validation, 
        #e:
        numbers = { '0': 'zero', '1':'one', '2': 'two', '3':'three', '4':'four', '5':'five', '6':'six', '7':'seven', '8':'eight', '9':'nine'}
        mp = {}
        res = ''
        for i in s:
            if i not in mp:
                mp[i] = 0
            mp[i] += 1
        
        digit_counts = [0] * 10
        digit_counts[0] = mp.get('z', 0)
        digit_counts[2] = mp.get('w', 0)
        digit_counts[4] = mp.get('u', 0)
        digit_counts[6] = mp.get('x', 0)
        digit_counts[8] = mp.get('g', 0)

        digit_counts[1] = mp.get('o', 0) - digit_counts[0] -digit_counts[2] - digit_counts[4]
        digit_counts[3] = mp.get('h', 0) - digit_counts[8]
        digit_counts[5] = mp.get('f', 0) - digit_counts[4]
        digit_counts[7] = mp.get('v', 0) - digit_counts[5]
        digit_counts[9] = mp.get('i', 0) - digit_counts[5] - digit_counts[6] - digit_counts[8]

        return ''.join(str(i) * digit_counts[i] for i in range(10))