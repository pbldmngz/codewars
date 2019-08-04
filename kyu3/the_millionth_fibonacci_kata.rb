def fib(n)
    safe = 1
    if n < 0 and n%2 == 0
      safe = -1
    end
    n = n.abs
    even = -> (k, m) {k*(2*m-k)}
    none = -> (k, m) {m**2+k**2}
    st = [0,1,1,2,3,5,8,13,21,34,55, 89,144]
    core, val, k, m, pex = [], 0, 0, 0, 0
    
    while n > 9 do
      if n%2 == 0
        core << true
        n = n/2.floor
      else
        core << false
        n = n/2.floor
      end
    end
    
    k = st[n]
    m = st[n+1]
    
    core.reverse_each do |x|
      if x
        pex = k
        k = even.call(k, m)
        m = none.call(pex, m)
      else
        pex = k
        k = even.call(k, m)
        m = none.call(pex, m)
        pex = k
        k = m
        m += pex
      end
    end
    return k*safe
  end