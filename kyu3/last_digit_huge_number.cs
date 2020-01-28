using System;
using System.Numerics;
namespace Solution {
    public class Calculator {
        public static int LastDigit(int[] array) {
            BigInteger n = 1;
            if (array == null || array.Length == 0) { return 1; }
            Array.Reverse(array);

            foreach (var x in array) {
                n = BigInteger.Pow(x, (int)(n >= 4 ? n % 4 + 4 : n));
            }
            return (int) (n % 10);
        }
    }
}