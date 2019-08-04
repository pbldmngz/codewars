def create_phone_number(n):
    n = "".join(map(str, n))
    return "(" + str(n)[0:3] + ") " + str(n)[3:6] + "-" + str(n)[6:]