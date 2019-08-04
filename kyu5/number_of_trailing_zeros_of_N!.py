def zeros(n):
    a, c = 5, 0
    while True:
        if n//a > 0:c += n//a
        else: return c
        a = a*5