function nicePara(str, len) {
    _ = [];
    str = str.split(" ");
    f = "";
    for (var i = 0; i < str.length; i++){
        if (str[i].length + 1 + f.length <= len){ //No debería haber mayor problema aquí
            f += str[i] + " ";
        } else {
            if (len - f.length <= 2){ //Si quedan menos de dos espacios
                if (str[i].length >= 2){ // Y la palabra cabe ahí
                    _.push(f + str[i]);
                    f = "";
                } else { //Y la palabra NO cabe ahí
                    _.push(f.trim());
                    f = "";
                }
            } else if (str[i].includes("-")){ //Si la palabra-esta-formada-así //Y hay huecos para ponerla
                console.log("Situación que aún tengo que comprender: " + str[i]);
            } else if (str[i].length > len - f.length && str[i].length >= 4){ //Quedan 3+ espacios, la palabra no cabe ahí y mide 4+
                f += str[i].slice(0, len - f.length - 1) + "-";
                _.push(f);
                f = str[i].slice(len - f.length - 1) + " ";
            } else {
                console.log("situación que no comprendo #2: " + str[i]);
            }
        }
    }
    return _.join("\n");
}
var tx = "A lot of different plans are marchingteytye-under-dddedthe-baesessic income banner. If-you-want-to-know-what-their-true-colours-are, then don’t be fooled by the all-things-to-all-people language used about them. Look at the bottom line. How are they going to pay for it? The devil is in the detail.";
console.log(nicePara(tx, 15));
//Viendo los resultados, asumo que hay algo que me falta en el código que ya tengo que se come las 3 letras finales de una frase que no cabe
//Y bueno... procesar los guiones