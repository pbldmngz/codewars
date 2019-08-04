//Im still newbie in programing, this is my first kata, hope you like it
const number = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
const dec = ["", "ten", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
const scale = ["", "ty", "hundred", "thousand", "million"];

function toString(satoshi) {
  var string = satoshi + "";
  var res = [];
  var den = true; //For avoiding that 50.000 affects 5.000 / 20 afects 0
  for (var i = string.length; i>0; i--)
  {
    if (i%6 == 0)
    {
      res.push(number[+string[string.length-i]] + " " + scale[2]);
    }
    else if (i%5 == 0)
    {
      res.push(hundred(string[string.length-i], string[string.length-i+1]) + " " + scale[3]);
      i--;
      den = false;
    }
    else if(i%4 == 0 && den && +string[string.length-i] != 0)
    {
      res.push(number[+string[string.length-i]] + " " + scale[3]);
      den = true;
    }
    else if (i%3 == 0 && +string[string.length-i] != 0)
    {
      res.push(number[+string[string.length-i]] + " " + scale[2]);
    }
    else if (i%2 == 0)
    {
      res.push(hundred(string[string.length-i], string[string.length-i+1]));
      i--;
      den = false;
    }
    else if (i == 1 && den)
    {
      res.push(number[+string[string.length-i]]);
    }
  }

  return res.join(" ").split(" ").filter(n => n!= "").join(" ");
}

function hundred(d, u) 
{
  var res = [];
  if (+d < 2)
  {
    res.push(number[Number(d+u)]);
  }
  else
  {
    res.push(dec[+d]);
    res.push(number[+u]);
  }
  return res.filter(n => n!= "").join(" ");
}