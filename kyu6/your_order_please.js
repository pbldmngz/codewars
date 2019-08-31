function order(words){
    words = words.split(" ");
    var sec = new Array(words.length);
    for (var i = 0; i < words.length; i++){
        sec[words[i].match(/[0-9]/)-1] = words[i];
    }
    return sec.join(" ");
}