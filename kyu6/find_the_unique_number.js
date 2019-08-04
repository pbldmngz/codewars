function findUniq(arr) {
    for (var i = 0; i < arr.length-1; i++)
    {
      if (arr[i] != arr[i+1])
      {
        if (i == 0 && arr[i+2] == arr[i+1]){return arr[i];}
        else {return arr[i+1];}
      }
    }
  }