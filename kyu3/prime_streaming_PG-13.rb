class Primes
    @PRIME = [2]
    MAX = 16000000
    arr = [false] + [true] * (MAX-2)
    arr[0] = nil
    
    arr.each.with_index do |b, n|
      next unless b
      x = 2*n + 1
      @PRIME << x
      (x*x..MAX).step(x*2) { |i| arr[i/2] = nil }
    end
    arr = nil
    
    def self.stream
      @PRIME.each
    end
  end