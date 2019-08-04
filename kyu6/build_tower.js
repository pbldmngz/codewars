function towerBuilder(nFloors) {
    var pyr = [];
    for (var i = 0; i < nFloors; i++){pyr.push("*".repeat(i*2) + "*")}
    const def = pyr[pyr.length-1].length;
    for (var i = 0; i < nFloors; i++)
    {
    pyr[i] = " ".repeat((def-pyr[i].length)/2) + pyr[i] + " ".repeat((def-pyr[i].length)/2)
    }
    return pyr;
  }