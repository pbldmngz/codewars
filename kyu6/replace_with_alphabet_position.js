function alphabetPosition(text) {
    text = text.toLowerCase();
    alpha = "abcdefghijklmnopqrstuvwxyz";
    var f = [];
    for (var n = 0; n < text.length; n++)
    {
      if (alpha.indexOf(text[n]) !== -1){
        f.push(alpha.indexOf(text[n])+1);
      }
    }
    return f.join(" ");
  }