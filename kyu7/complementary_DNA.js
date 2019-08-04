function DNAStrand(dna){
    var adn = []
    for (var i = 0; i < dna.length; i++){
      if (dna[i] == "T") {adn.push("A");}
      else if (dna[i] == "A") {adn.push("T");}
      else if (dna[i] == "C") {adn.push("G");}
      else if (dna[i] == "G") {adn.push("C");}
      else {return NaN;}
    }
    return adn.join("");
  }