def square_sum(numbers):
    x = lambda a: a**2
    return sum(list(map(x, numbers)))