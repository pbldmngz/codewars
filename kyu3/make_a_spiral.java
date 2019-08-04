public class Spiralizor 
{
    public static int[][] spiralize(int s) 
    {
        int[][] a = new int[s][s];
        for (int i = 0; i < s; i++) 
        {
            for (int j = 0; j < s; j++) {a[i][j] = 1;}
        }
        
        for (int i = 1, j = s - 2; i < s; i += 2, j -= 2) 
        {
            for (int h = i - 1; h <= j; h++) {a[i][h] = 0;}
            for (int h = i + 1; h <= j; h++) {a[h][j] = 0;}
            for (int h = j - 1; h >= i; h--) {a[j][h] = 0;}
            for (int h = j - 1; h > i + 1; h--) {a[h][i] = 0;}
        }
        if(s % 2 == 0 && s > 2) {a[s / 2][s / 2 - 1] = 1;}
        return a;
    }
}