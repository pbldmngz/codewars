function spinWords(s){
    s = s.split(" ");
    for (var i = 0; i < s.length; i++)
    {
      if (s[i].length > 4)
      {
        s[i] = s[i].split("").reverse().join("");
      }
    }
    return s.join(" ");
  }