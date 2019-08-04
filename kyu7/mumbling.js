function accum(s) {
    var co = [];
    for (var i in s)
    {
      co.push(s[i].toUpperCase());
      for (var j =0; j < i; j++)
      {
         co[i] += s[i].toLowerCase();
      }
    }
      return co.join("-");
  }