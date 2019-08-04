function high(x){
    var val = x.split(" ");
    console.log(val);
    var arrVal = [];
    var psVal = 0;
    alpha = "abcdefghijklmnopqrstuvwxyz";
    
    for (var i = 0; i < val.length; i++)
    {
      for (var j = 0; j < val[i].length; j++)
      {
        psVal += alpha.indexOf(val[i].charAt(j))+1;
      }
      arrVal.push(psVal);
      psVal = 0;
    }
    var e = 0;
  
    for (var i = 0; i < arrVal.length; i++)
    {
      if (arrVal[i]>arrVal[e])
      {
        e = i;
      }
    }
    return val[e];
  }