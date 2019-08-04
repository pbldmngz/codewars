def middle_permutation(string)
    text = ""
    string  = string.chars
    string = string.sort { |a, b| b <=> a}
    string = string.join
    safe, l = (string.length-2)/2.floor, string.length
    if string.length%2 == 0 
      p = 1
    else 
      p = 2
    end
    
    puts string
    
    puts "range is #{-safe-p} to #{-safe}"
    (-safe-p..-safe-1).each { |x| text << string[x]}
    
    puts "range is #{0} to #{l-safe-p}"
    (0..l-safe-p-1).each { |x| text << string[x]}
    
    puts "range is #{l-safe} to #{l}"
    (l-safe..l-1).each do |x|
      if safe != 0
        text << string[x]
      end
    end
    puts text
    return text
  end