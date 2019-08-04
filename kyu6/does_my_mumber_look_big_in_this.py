def narcissistic( value ):
    v, t = value, 0
    value = list(map(int, str(value)))
    for x in value: t += x**len(value)
    return True if t == v else False