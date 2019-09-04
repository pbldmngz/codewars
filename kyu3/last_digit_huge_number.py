def last_digit(lst):
    n = 1
    for x in reversed(lst):
        if n >= 4: n = n % 4 + 4
        n = x ** n
    return n % 10
