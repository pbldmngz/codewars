function songDecoder(song){
    return song.split("WUB").filter(song => song != "").join(" ");
  }