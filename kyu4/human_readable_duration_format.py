def format_duration(seconds):
    if seconds == 0: return "now"
    s = seconds%60
    m = seconds//60
    h = m//60
    m = m%60
    d = h//24
    h = h%24
    y = d//365
    d = d%365
    fo, no, t, to = [], "", [y,d,h,m,s], ["year", "day", "hour", "minute", "second"]
    for c, g in enumerate(t):
        if g==0: pass
        elif g>1: fo.append(str(g) + " " + to[c] + "s")
        else: fo.append(str(g) + " " + to[c])
    for c, g in enumerate(fo):
        if c == len(fo)-1: no += g
        elif c == len(fo)-2: no += g + " and "
        else: no += g + ", "
    return no