function sumStrings(a,b) { 
    if (a.length != b.length)
    {
      if (a.length < b.length){a = " ".repeat((b.length-a.length)) + a;}
      else {b = " ".repeat(a.length-b.length) + b;}
    }
    var atemp = [];
    var p = 0;
    
    for (var i =1; i <= a.length; i++)
    {
      if (p+Number(a[a.length-i])+Number(b[a.length-i]) > 9)
      {
        atemp.unshift(p+Number(a[a.length-i])+Number(b[a.length-i])-10);
        p = 0;
        p++;
      }
      else
      {
        atemp.unshift(Number(a[a.length-i])+Number(b[a.length-i])+p);
        p = 0;
      }
    }
    if (p>0){atemp.unshift(p);}
    
    while (atemp[0]=="0")
    {
      delete atemp[0];
    }
    return atemp.join("");
  }