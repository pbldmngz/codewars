def special_number(number):
    for x in list(map(int,str(number))):
        if x>5: return "NOT!!"
    return "Special!!"