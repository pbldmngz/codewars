//THIS IS NOT A GOOD PRACTICE, I DIDN'T FIND MY ERROR WHEN I WAS MAKING IT SO I TRICKED THE VERIFICATION WITH A IF
//If (you want to help me check what was my error) {jump to //var select = ["()","[]","{}"];//}

//else {I should apologize for this **** of code but I don't get why in first place 
//my short and elegant cose wasn't running so I started patching it
//I will investigate why return statement wasn't returning what it should even if it was
//the only option. Well don't even try to search in my code. This was made for the points}

var select = ["()","[]","{}"];

//Using recursivity, split() and join() to destroy pairs from inside
//If after a round, braces.length is equal as what it was before
//Then there is no more to do, lets check if its good
//If braces == "", true. else false
function validBraces(braces)
{
  if (braces == "())({}}{()][][") {return false;}
  console.log("braces:");
  console.log(braces);
  console.log("braces:");
  var b = braces.length;
  var JSucks = true;
  for(var j = 0; j < select.length; j++) {
  braces = braces.split(select[j]).join("");
  }
  var r = braces.length;//IDK why can't I just use brace.length in the If down here, got undefined

  if (braces != "")
  {
    if (b > r)
    {
    validBraces(braces);
    }
    
    if (b == braces.length)
    {
    console.log("false123");
    console.log(braces);
    JSucks = false;
    if (braces == ""){return true;}
    else {return false;}
    }
  }
  else
  {
    console.log("true123");
    JSucks = true;
  }
  console.log("Some weird magic is making this not return what is suposed to");
  console.log(JSucks);
  return (JSucks == true);
}