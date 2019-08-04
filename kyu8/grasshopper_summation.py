def summation(num):
    return num if num==0 else num + summation(num-1)