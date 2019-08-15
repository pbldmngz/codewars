def wave(str):
    arr = []
    for i in range(len(str)):
        if str[i] != " ": arr.append(str[:i] + str[i].upper() + str[i+1:])
    return arr