function isVow(a){
  
    for (var x = 0; x < a.length ; x++)
    {
      if (a[x] == 97){a[x] = "a";}
      if (a[x] == 101){a[x] = "e";}
      if (a[x] == 105){a[x] = "i";}
      if (a[x] == 111){a[x] = "o";}
      if (a[x] == 117){a[x] = "u";}
    }
    return a;
  }