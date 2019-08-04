function isPangram(text){
    text = text.toLowerCase();
    var a = 0;
    alpha = "abcdefghijklmnopqrstuvwxyz";
    for (var i = 0; i < alpha.length; i++){
      if (text.includes(alpha[i])){a++;}
    }
    return (a == alpha.length) ? true:false;
  }