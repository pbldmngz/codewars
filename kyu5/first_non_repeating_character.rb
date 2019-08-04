def  first_non_repeating_letter(s) 
    puts s
    (0..s.length-1).each do |i|
      puts s[i]
      if s.scan(/#{s[i]}/i).length == 1
        puts s.scan(/#{s[i]}/i)
        return s[i]
      end
    end
    return ""
  end