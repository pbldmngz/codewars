def sum_of_minimums(numbers):
    a = 0
    for n in numbers:
        a += min(n)
    return a