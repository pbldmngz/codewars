function nicePara(inText, lineLength) {
    inText = inText.trim();
    var _ = [];
    var i;
    while (inText.length > 0) {
        if (inText.length <= lineLength) {
            _.push(inText);
            inText = "";
        } else {
            i = lineLength;
            if (inText[i] != " ") {
                while (!inText.slice(i - 3, i + 1).match(/[0-9a-zA-Z]{4}/) 
                && (inText[i - 1] != "-" && inText[i - 1] != " ")) {
                    i--;
                }
            }
            while (inText[i - 1] == " ") {
                i--;
            }
            if (inText[i] == " " | inText[i - 1] == "-") {
                _.push(inText.slice(0, i));
                inText = inText.slice(i).trim();
            } else {
                _.push(inText.slice(0, i - 1) + "-");
                inText = inText.slice(i - 1);
            }
        }
    }
    return _.join("\n");
}