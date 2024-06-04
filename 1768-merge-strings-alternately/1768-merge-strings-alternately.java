class Solution {
    public String mergeAlternately(String word1, String word2) {
        String res = "";
        int i = 0;
        while (i < word1.length() || i < word2.length()) {
            if (i < word1.length()) {  res = res + word1.charAt(i);}
            if (i < word2.length()) {
                res = res + word2.charAt(i);
            }
            i ++;
        }
        return res;
    }
}