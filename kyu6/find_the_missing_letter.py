def find_missing_letter(chars):
    alpha = "a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z".split(", ")
    beta = [x.upper() for x in alpha]
    return [x for x in alpha[alpha.index(chars[0]):] if x not in chars][0] if "".join(chars).islower() else [x for x in beta[beta.index(chars[0]):] if x not in chars][0]