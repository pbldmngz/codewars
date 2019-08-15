def to_weird_case(string):
    string = string.split(" ")
    for i in range(len(string)):
        string[i] = weirdo(string[i])
    return " ".join(string)
def weirdo(string):
    st, ctrl = "", False
    for i in string:
        if ctrl: st += i.lower()
        else: st += i.upper()
        ctrl = not ctrl
    return st