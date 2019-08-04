function solution(list){
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
          ph.push(list[i]);
        }
        else if (wt == 1)
        {
          ph.push(list[i-1]);
          ph.push(list[i]);
          wt = 0;
        }
        else
        {
          ph.push(ho-wt + "-" + ho);
          wt = 0;
        }
      }
    }
    return ph.join();
   }