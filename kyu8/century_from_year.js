function century(year) {
    return parseInt(year)%100==0 ? parseInt(year)/100 : Math.floor(parseInt(year)/100)+1;
  }