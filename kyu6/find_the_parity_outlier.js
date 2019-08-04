function findOutlier(numbers){
    var comp = 0;
    for (var i = 0; i < numbers.length; i++){if (numbers[i]%2 == 0){comp++;} else {comp--;}}
    var even = comp > 0;
    for (var i = 0; i < numbers.length; i++){if ((numbers[i]%2 == 0) != even){return numbers[i];}}
  }