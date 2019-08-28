//I had a hard time with this kata, didn't find the error besides it has to do with the function returning ""
// And somehow my filter didn't catch something, the test shows 0 to 5 errors, that's why it works
function bestServer(s) {
    var count;
    var evil;
    for (var i = 0; i < s.length; i++){
        count = 0;
        evil = 0;
        s[i]["ping"] = true;
        if (typeof s[i]["testdata"] != "number"){
            for (var j = 0; j < s[i]["testdata"].length; j++){
                if (s[i]["testdata"][j] != -1){
                    count += s[i]["testdata"][j];
                    if (s[i]["testdata"][j] > 300){
                        s[i]["ping"] = false;
                    }
                }
                else {
                    evil += 1;
                }
            }
            s[i]["d_rate"] = parseInt((evil/s[i]["testdata"].length)*100);
            s[i]["testdata"] = parseInt(count/(s[i]["testdata"].length - evil));
            s[i]["evil"] = evil;
        }
    }
    candidate = 0;
    for (var i = 0; i < s.length; i++){
        if (s[i]["price"] <= 500 && s[i]["ping"] == true && s[i]["d_rate"] < 20){
            if (s[candidate]["evil"] > s[i]["evil"]){
                candidate = i;
            } else if (s[candidate]["evil"] == s[i]["evil"]){
                if (s[candidate]["testdata"] > s[i]["testdata"]){
                    candidate = i;
                } else if (s[candidate]["testdata"] == s[i]["testdata"]){
                    if (s[candidate]["price"] > s[i]["price"]){
                        candidate = i;
                    } 
                }
            }
        }
    }
    return (s[candidate]["price"] <= 500 && s[candidate]["ping"] == true && s[candidate]["d_rate"] < 20) ? s[candidate]["name"]: "";
}