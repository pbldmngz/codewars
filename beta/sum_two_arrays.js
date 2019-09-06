function addArrays(array1, array2) {
    let arrayToNumber1 = (array1.length > 0) ? parseInt(array1.join('')) : 0;
    let arrayToNumber2 = (array2.length > 0) ? parseInt(array2.join('')) : 0;

    var res = ((arrayToNumber1 + arrayToNumber2) != 0) ?
        (arrayToNumber1 + arrayToNumber2).toString().split("") : [];
    if (res[0] == "-") {
        res[1] = parseInt("-" + res[1]);
        res.shift();
    }
    return res.map(Number);
}