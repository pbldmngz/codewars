function rowWeights(array){
    var m = [0, 0]
    for (var i in array)
    {
      if (i%2 == 0){m[0] += array[i];}
      else {m[1] += array[i];}
    }
    return m;
  }