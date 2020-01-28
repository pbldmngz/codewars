class Kata {
    static def orderedCount(input) {
        def letra = []
        def ocurrencias = []

        for (def i = 0; i < input.length(); i++)
        {
            if (letra.contains(input[i]))
            {
                ocurrencias[letra.indexOf(input[i])] += 1
            }
            else {
                letra << input[i]
                ocurrencias << 1
            }
        }
        
        return [letra, ocurrencias].transpose()
    }
}