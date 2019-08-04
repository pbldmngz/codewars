function extraPerfect(n){
    var m = []; 
    if (n%2==0 && n > 0){n-=1;}
    for (var i = 1; i <= n; i+=2){m.push(i);}
    return m;
  }