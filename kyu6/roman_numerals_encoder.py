def solution(n):
    dc = {1:"I", 5:"V", 10:"X", 50:"L", 100:"C", 500:"D", 1000:"M"}
    ch = []
    c = n
    b, f = True, False
    x, p = 0, 5000
    while n != 0:
        if b: x = 5
        else : x = 2
        p = p/x
        if n%p >= 0:
            c = n//p
            n = n%p
            while c > 0 and c != 4 and c != 9:
                ch.append(dc.get(p))
                c -= 1
            if c > 0 and c == 4 or c == 9:
                if len(ch) > 0:
                    f = ch[-1] == dc.get(p*x)
                if c == 9 or f:
                    if f:
                        ch.pop(-1)
                    ch.append(dc.get(p))
                    ch.append(dc.get(p*10))
                elif c == 4:
                    ch.append(dc.get(p))
                    ch.append(dc.get(p*x))
                c -= 1
        else:
            pass
        b = not b
    return "".join(ch)