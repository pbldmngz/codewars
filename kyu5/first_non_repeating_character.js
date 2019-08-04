function firstNonRepeatingLetter(s) {
    console.log(s);
    var que;
    for (var i = 0; i < s.length; i++)
    {
      que = new RegExp(s[i],"gi");
      if ((s.match(que) || []).length == 1)
      {
      return s[i];
      }
    }
    return "";
  }