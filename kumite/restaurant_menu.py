def frm(data, mx):
    if len(data) == 0: return None
    _, mx = [], mx - len(str(max([d[1] for d in data]))) - 1
    for d in data:
        if (mx-len(d[0].strip(" "))) <= 0: return ""None""
        _.append("{}{}${}".format(d[0].upper().strip(),
        "."*(mx - len(d[0].strip(" "))),
        str(d[1])))
    return "\n".join(_)