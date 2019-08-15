def group_by_commas(n):
    n = str(n)
    if len(n) < 4: return n
    b = n[:len(n)%3]
    n = n[len(b):]
    res = ",".join(list(map("".join, zip(*[iter(n)]*3))))
    return res if len(b) < 1 else b + "," + res