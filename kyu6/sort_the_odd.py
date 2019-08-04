#IKR this is not the short way
def sort_array(source_array):
    i = []
    for x in source_array:
        if x%2:
            i.append(x)
    i.sort()
    a = 0
    for x, y in enumerate(source_array):
        if y%2:
            source_array[x] = i[a]
            a += 1
    return source_array