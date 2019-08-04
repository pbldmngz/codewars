def validate(n):
    n = str(n)
    if len(n)%2 == 0: b = False
    else : b = True
    c = 0
    ctrl = []
    while c < len(n):
        if b: 
            ctrl.append(int(n[c]))
        if b == False: 
            if int(n[c])*2 > 9:
                ctrl.append(int(str(int(n[c])*2)[0])+int(str(int(n[c])*2)[1]))
            else:
                ctrl.append(int(n[c])*2)
        c += 1
        b = not b
    if sum(ctrl)%10 == 0 and sum(ctrl) > 9: return True
    else : return False