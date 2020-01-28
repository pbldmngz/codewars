class DeadFish {

    static def parse (String input) 
    {
        int value = 0
        def list = []

        for (def i = 0; i < input.size(); i++)
        {
            switch (input[i]) 
            {
                case "i":
                    value += 1;
                    break;
                case "d":
                    value -= 1;
                    break;
                case "s":
                    value *= value;
                    break;
                case "o":
                    list << value;
                    break;
            }
        }
        return list
    }
    
}