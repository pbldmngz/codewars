def domain_name(url):
    url = url.split(".")
    for y, x in enumerate(url):
        if "://www" in x: return url[y+1]
        elif "://" in x: return x[x.find("//")+2:]
        elif "www" in x: return url[y+1]
        else: return x