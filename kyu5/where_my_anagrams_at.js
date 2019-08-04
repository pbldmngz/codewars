function anagrams(word, words) {
    var ph = [];
    word = word.split("").sort();
    for (var i =0; i < words.length; i++)
    {
      if (words[i].split("").sort().join("") == word.join("")){ph.push(words[i]);}
    }
    return ph;
  }