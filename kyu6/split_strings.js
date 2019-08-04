function solution(str){
    var sol = [];
    var arr = str.split("");
    if (arr.length%2 != 0){arr.push("_");}
    for (var i = 0; i < arr.length-1; i+= 2){sol.push(arr[i]+arr[i+1]);}
    return sol;
  }