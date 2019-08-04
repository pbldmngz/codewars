import itertools
def permutations(string):
    string = list(itertools.permutations(string))
    f, res = 0, []
    while f < len(string):
        res.append("".join(string[f]))
        f += 1
    return list(dict.fromkeys(res))