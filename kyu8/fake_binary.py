def fake_bin(x):
    x, l = list(map(int, x)), ""
    for n in x:
        if n>=5: l += "1"
        else: l += "0"
    return "".join(l)