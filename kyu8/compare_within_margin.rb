def close_compare(a, b, margin = 0)
    el = 0
    if a > b
      if a-b > margin
        el = 1
      else
        el = 0
      end
    elsif a < b
      if b-a > margin
        el = -1
      else
        el = 0
      end
    end
    el
  end