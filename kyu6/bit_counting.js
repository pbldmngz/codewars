var countBits = function(n) {
    return (parseInt(n).toString(2).match(/1/g) || []).length;
  }