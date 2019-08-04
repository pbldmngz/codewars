def to_lover_case(string):
    al, lo, string = "abcdefghijklmnopqrstuvwxyz", "LOVE", list(string)
    for y, x in enumerate(string):
        if x.lower() in al: string[y] = lo[al.index(x.lower())%4]
    return "".join(string)