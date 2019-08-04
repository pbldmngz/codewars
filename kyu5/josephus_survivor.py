def josephus_survivor(n,k):
    arr, j = [x for x in range(1,n+1)], k - 1
    while True:
        if n ==1: return arr[0]
        if j > n-1: j = j%n
        del arr[j]
        n -= 1
        j += k-1