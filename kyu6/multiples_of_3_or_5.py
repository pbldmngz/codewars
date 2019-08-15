def solution(number):
    list = 0
    for i in range(number):
        if (i % 3 == 0 or i % 5 == 0):
            list += i
    return list