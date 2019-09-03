import re
def nicePara(inText, lineLength):
    inText = inText.strip()
    _ = []
    while len(inText) > 0:
        if len(inText) <= lineLength:
            _.append(inText)
            inText = ""
        else:
            i = lineLength
            if inText[i] != " ":
                while not re.match(r"[0-9a-zA-Z]{4}", inText[i - 3 : i + 1]) and inText[i - 1] != "-" and inText[i - 1] != " ":
                    i -= 1
            while inText[i - 1] == " ": i -= 1
            if inText[i] == " " or inText[i - 1] == "-":
                _.append(inText[0 : i])
                inText = inText[i:].strip()
            else:
                _.append(inText[0 : i - 1] + "-")
                inText = inText[i - 1:]
    return "\n".join(_)               