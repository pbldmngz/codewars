function list(names){
    if (names.length<1){return "";}
    var n = "";
    var ext = ", ";
    for (var i = 0; i < names.length; i++)
    {
      if (i == names.length -1){return n + names[i].name}
      else if (i == names.length -2){ext = " & ";}
      n += names[i].name + ext;
    }
  }