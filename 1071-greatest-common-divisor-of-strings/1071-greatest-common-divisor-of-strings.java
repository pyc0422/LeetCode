class Solution {
    public String gcdOfStrings(String str1, String str2) {
        if (!(str1 + str2).equals(str2 + str1)) {
            return "";
        }
        int divier = helperFunc(str1.length(), str2.length());
        return str1.substring(0, divier);
        
    }
    public int helperFunc(int l1, int l2) {
        return l2 == 0 ? l1 : helperFunc(l2, l1 % l2);
    }
}