def valid_parentheses(string)
    cnt = 0
    (0..string.length-1).each do |x|
      if string[x] == '('
        cnt += 1
      elsif string[x] == ')'
        cnt -= 1
      end
      if cnt < 0
        return false
      end
    end
    if cnt == 0
      return true
    else
      return false
    end
  end