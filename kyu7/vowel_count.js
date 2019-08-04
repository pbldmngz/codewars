function getCount(str) {
    var vowelsCount = 0;
    const st = "aeiou";
    for(var i = 0; i<st.length; i++){
        for (var j = 0; j <str.length; j++)
        {
          if (str[j].includes(st[i])){
            vowelsCount ++;
          }
        }
    }
    return vowelsCount;
  }
  //Is there any kind of method to do this faster?