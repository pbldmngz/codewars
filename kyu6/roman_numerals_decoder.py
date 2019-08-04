def solution(roman):
    a = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
    b = "M CM D CD C XC L XL X IX V IV I".split()
    v, c = 0, 1
    while True:
        if b[c] in roman:
            if c%2 != 0:  
                v += a[c]
                roman = roman.replace(b[c], "")
            if c%2 == 0: v += roman.count(b[c])*a[c]
        c += 2
        if c >=13 and c%2 != 0: c = 0
        if c >=13 and c%2 == 0: return v