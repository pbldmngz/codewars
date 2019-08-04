snail = function(array) {
    var cons1=array.length;
    var cons2=array.length;
    var res = [];
    if(array.length == 1){return array[0];}
    while(cons2>1){
        for(var i = 0; i < cons2; i++) {res.push(array[0][i]);}
        array.splice(0,1);
        cons2--;
        for(var i = 0; i < cons2; i++)
        {
            res.push(array[i][cons2]);
            array[i].splice(cons2);
        }
        cons1--;
        for(var i = cons1-1; i >= 0; i--) {res.push(array[cons2-1][i]);}
        array.splice(cons2-1);
        cons1--;
        for(var i = cons2-1; i > 0; i--)
        {
            res.push(array[i-1][0]);
            array[i-1].splice(0,1);
        }
        cons2--;
        if(cons2 == 1 && cons1 == 1) {res.push(array[0][0]);}
    }
    return res;
   }