def last_digit(lst)
    n = 1
    for x in lst.reverse do
      if (n >= 4)
          n = n % 4 + 4
      end
      n = x ** n
    end
    return n % 10
end
