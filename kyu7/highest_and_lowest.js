function highAndLow(numbers){
    numbers = numbers.split(" ");
    var higher = +numbers[0];
    var lower = +numbers[0];
  
    for (var x in numbers)
    {
      if (+numbers[x] < lower){lower = +numbers[x];}
      if (+numbers[x] > higher){higher = +numbers[x];}
    }
    return higher + " " + lower;
  }