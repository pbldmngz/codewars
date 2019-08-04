def decrypt(encrypted_text, n):
    if n <= 0:
        return encrypted_text
    tl = list(encrypted_text)
    l = len(tl)
    if l % 2 == 0:
        spl = l//2
    else:
        spl = (l-1)//2
    left = tl[0:spl]
    right = tl[spl:l]
    final = []
    for i in range(0,l):
        if i % 2 == 0:
            final.append(right[i//2])
        else:
            final.append(left[(i-1)//2])
    result = ''.join(final)
    return decrypt(result,n-1)

def encrypt(text, n):
    if n <= 0 :
        return text
    tl = list(text)
    left = tl[::2]
    right = tl[1::2]
    encrypted = right + left
    result = ''.join(encrypted)
    return encrypt(result,n-1)