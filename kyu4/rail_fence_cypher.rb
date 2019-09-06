def decode_rail_fence_cipher(str, num_rails)
    base(num_rails, str.length).sort.zip(str.chars).sort_by { |a| a[0][1] }.map {|a| a[1]}.join
  end
  
def encode_rail_fence_cipher(str, num_rails)
  base(num_rails, str.length).zip(str.chars).sort.map {|a| a[1]}.join
  end

def base(r, s)
    _ = (0..r - 1).to_a + (1..r - 2).to_a.reverse
    _.cycle.first(s).zip(0..s)
  end