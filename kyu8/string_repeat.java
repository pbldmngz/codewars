public class Solution {
    public static String repeatStr(final int repeat, final String string) {
      String st = "";
      for (int i = 0; i < repeat; i++){
        st += string;
      }
        return st;
    }
}