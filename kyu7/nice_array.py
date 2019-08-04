def is_nice(arr):
    if len(arr) == 0: return False
    verify = 0
    for n in arr:
        for m in arr:
            if n == m + 1 or n == m-1: 
                verify += 1
                break
    return True if verify == len(arr) else False