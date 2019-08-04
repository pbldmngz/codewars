def make_readable(seconds):
    s, m, h = 0, 0, 0
    s = seconds%60
    m = seconds//60
    h = m//60
    m = m%60
    return "%02d" % h + ":" + "%02d" % m + ":" + "%02d" % s