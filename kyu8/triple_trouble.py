def triple_trouble(one, two, three):
    tx = ""
    e = 0
    while e < len(one):
        tx += one[e] + two[e] + three[e]
        e += 1
    return tx