//This is me recycling some code from an other kata, this is not the best way, just the faster one for me
function sumIntervals(intervals){
    var all = [];
    for (var i = 0; i < intervals.length; i++)
    {
      for (var j = intervals[i][0]; j < intervals[i][1]; j++)
      {
        all.push(j);
      }
    }
    all = new Set(all);
    all = Array.from(all);
    all = all.map(n => n = parseInt(n));
    all = all.sort((a, b) => a - b);
    all = range(all);
  
    var value = 0;
    for (var i = 0; i < all.length; i++)
    {
      if (all[i].split(".").length > 1)
      {
        value += all[i].split(".")[1]-all[i].split(".")[0]+1
      }
      else
      {
        value ++;
      }
    }
    return value;
  }
  
  //Recycle mode
  //https://www.codewars.com/kata/51ba717bb08c1cd60f00002f
  function range(list){//This was Range Extraction kata, preffer saving time
   var ph = [];
   var ho;
   var wt = 0;
   for (var i = 0; i < list.length; i++)
   {
     if (list[i+1] == list[i]+1)
     {
       ho = list[i+1];
       wt++;
     }
     else
     {
       if (wt == 0)
       {
         ph.push(list[i]+"");
       }
       else if (wt == 1)
       {
         ph.push(list[i-1]);
         ph.push(list[i]);
         wt = 0;
       }
       else
       {
         ph.push(ho-wt + "." + ho);
         wt = 0;
       }
     }
   }
   return ph;
  }