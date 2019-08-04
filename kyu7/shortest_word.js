function findShort(s){
    s = s.split(" ");
    var e = s[0].length;
    for (var n in s){if (s[n].length < e){e = s[n].length;}}
    return e;
  }