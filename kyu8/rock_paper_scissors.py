def rps(p1, p2):
    a = ['scissors','paper','rock']
    if p1 == p2: return "Draw!"
    elif (a.index(p1) == 0 and a.index(p2) == 1) or (a.index(p1) == 1 and a.index(p2) == 2) or (a.index(p1) == 2 and a.index(p2) == 0): return "Player 1 won!"
    else: return "Player 2 won!"