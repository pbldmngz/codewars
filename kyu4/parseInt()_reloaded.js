function parseInt(string) {
    if (string == "one million") {return 1000000;}
    string = string.split("-").join(" ").split(" and ").join(" ").split(" ");
    const numb = "zero, one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve, thirteen, fourteen, fifteen, sixteen, seventeen, eighteen, nineteen".split(", ");
    const dec = "null, ten, twenty, thirty, forty, fifty, sixty, seventy, eighty, ninety".split(", ");
    var arr = []; 
    
    for (var i = 0; i < string.length; i++)
    {
      if (string[i] == "hundred"){arr[arr.length-1] *= 100;}
      else if (string[i] == "thousand"){arr = arr.map(m => m *= 1000);}
      else if(numb.indexOf(string[i]) != -1){arr.push(numb.indexOf(string[i]));}
      else if(dec.indexOf(string[i]) != -1){arr.push(dec.indexOf(string[i])*10);}
    }
    var finRes = 0;
    for (var i = 0; i < arr.length; i++){finRes += arr[i];}
    return finRes;
  }