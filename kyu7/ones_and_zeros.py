def binary_array_to_number(arr):
    sum = 0
    for a, x in enumerate(range(len(arr)-1, -1, -1)):
        if bool(arr[x]):
            sum += 2**a
    return sum