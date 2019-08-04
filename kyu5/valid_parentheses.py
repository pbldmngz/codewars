def valid_parentheses(string):
    f = 0
    for s in string:
        if s == "(":  f += 1
        elif s == ")": f-=1
        if f < 0: return False
    return False if f != 0 else True