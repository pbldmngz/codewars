def string_transformer(s):
    s = s.swapcase().split(" ")
    return " ".join(s[::-1])