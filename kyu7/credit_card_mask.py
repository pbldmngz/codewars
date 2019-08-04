# return masked string
def maskify(cc):
    l = len(cc)
    refill = []
    lr = 0
    while lr < l:
        if lr < (l-4):
            refill.extend("#")
        else:
            refill.extend(cc[lr])
        
        lr += 1

    res = ''.join(str(e) for e in refill)
    
    return res