def find_even_index(arr):
    pointer = 0
    st = 0
    b = False
    while pointer < len(arr):
        nS1 = sum(arr[:pointer+1]) #left
        nS2 = sum(arr[pointer:]) #right

        if nS1 == nS2:
            b = True
            st = pointer
            break
        pointer += 1
    if b:
        return st
    else:
        return -1