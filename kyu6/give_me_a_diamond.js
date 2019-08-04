function diamond(n){
    if (n <= 0 || n%2 == 0){return null;}
    n = Math.ceil(n/2);
    var pyr = [];
    for (var i = 0; i < n; i++){pyr.push("*".repeat(i*2) + "*")}
    const def = pyr[pyr.length-1].length;
    for (var i = 0; i < n; i++)
    {
      pyr[i] = " ".repeat((def-pyr[i].length)/2) + pyr[i] + "\n";
    }
    for (var i = n-2; i >= 0; i--)
    {
      pyr.push(pyr[i]);
    }
    return pyr.join("");
  }