def delete_digit(n):
    n = [x for x in str(n)]
    i, e = 1, 0
    while i < len(n):
        if n[-i-1] < n[-i]: e = n[-i-1]
        i += 1
    n.remove(str(e))
    return int("".join(n))