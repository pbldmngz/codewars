class Kata {
    static def houseNumbersSum(inputArray) {
        def zero = inputArray.findIndexOf { it == 0 }
        def sum = 0
        
        for (def i = 0; i < zero; i++)
        {
            sum += inputArray[i]
        }
        return sum
    }
}