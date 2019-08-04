def automorphic(n):
    return "Automorphic" if str(n**2).find(str(n))>len(str(n**2))-len(str(n))-1 else "Not!!"
    #I feel retarded when i have to write Not!!Not!!Not!!Not!!Not!! instead of False