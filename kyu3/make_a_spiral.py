dx = [0, 1, 0, -1]
dy = [1, 0, -1, 0]

def getNextStep(cx, cy, dire):
    nx = cx + dx[dire]
    ny = cy + dy[dire]
    return nx, ny

def spiralize(size):
    M = [[0]*size for i in range(size)]
    cx, cy = 0, 0
    ## directions
    '''
    dire East = 0
    dire South = 1
    dire West = 2
    dire North = 3
    '''
    def isValid(a, b):
        return 0<=a<size and 0<=b<size

    def isValNxt(X, Y, Dire):
        nx, ny = getNextStep(X, Y, Dire)
        return isValid(nx, ny)

    def isZeroNxt(X, Y, Dire):
        nx, ny = getNextStep(X, Y, Dire)
        return M[nx][ny] == 0

    def check(X, Y, Dire):
        if isValNxt(X, Y, Dire):
            if isZeroNxt(X, Y, Dire):
                return True
            return False
        return True

    def doubleCheck(X, Y, Dire):
        ## check the next 2 cells should be
        ## invalid invalid
        ## 0       invalid
        ## 0       0
        nx, ny = getNextStep(cx, cy, Dire)
        nnx, nny = getNextStep(nx, ny, Dire)
        val1 = isValid(nx, ny)
        val2 = isValid(nnx, nny)
        if val1==False and val2==False:
            return True
        if M[nx][ny] == 0 and val2 == False:
            return True
        if M[nx][ny] == 0 and M[nnx][nny] == 0:
            return True
        return False

    dire = 0 ## intially go east
    while True:
        ## can keep current cell
        ## if next cell is invalid or 0 in current direction
        ## and next cell is invalid or valid and 0 in Direction (dire + 1) % 4
        if check(cx, cy, dire) and check(cx, cy, (dire+1)%4):
            M[cx][cy] = 1
        nx, ny = getNextStep(cx, cy, dire)
        if isValid(nx, ny) == False:
            dire = (dire + 1) % 4
            nx, ny = getNextStep(cx, cy, dire)
            if isValid(nx, ny) and check(cx, cy, dire):
                cx, cy = nx, ny
            else:
                break
        else:
            if doubleCheck(cx, cy, dire):
                cx, cy = getNextStep(cx, cy, dire)
            else:
                dire = (dire + 1) % 4
                if doubleCheck(cx, cy, dire):
                    cx, cy = getNextStep(cx, cy, dire)
                else:
                    break
    return M
