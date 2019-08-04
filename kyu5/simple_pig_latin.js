function pigIt(str){
    str = str.split(" ");
      for (var i = 0; i < str.length; i++)
      {
          if (str[i] != "!" && str[i] != "?"){str[i] = str[i].slice(1) + str[i].charAt(0) + "ay";}
      }
      return str.join(" ");
    }