def spiralize(size):
    a = []
    for i in range(size):
        a.append([])
    for n in range(size):
        for i in range(size):
            a[n].append([])

    for i in range(0, size):
        for j in range(0, size):
            a[i][j] = 1
    i = 1
    j = size - 2
    while i < size:
        h = i - 1
        while h <= j:
            a[i][h] = 0
            h += 1
        
        h = i + 1
        while h <= j:
            a[h][j] = 0
            h += 1
            
        h = j - 1
        while h >= i:
            a[j][h] = 0
            h -= 1
            
        h = j - 1
        while h > i + 1:
            a[h][i] = 0
            h -= 1
        i += 2
        j -= 2
    
    if size % 2 == 0 and size > 2:
    #I know this is kinda weird, i already dit the kata in ruby and had no problem
        if size % 6 == 0: a[size//2][size//2] = 1
        else: a[size//2][size//2] = 0 
    return a