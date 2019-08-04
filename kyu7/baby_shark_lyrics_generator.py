def baby_shark_lyrics():
    a,r,res,c2=","+" doo"*6+"\n"," shark","","!\n"
    b = ["Baby"+r, "Mommy"+r, "Daddy"+r, "Grandma"+r, "Grandpa"+r, "Let's go hunt"]
    for co in range(0,6):
        for x in range(0, 3):
            res += b[co]+a
        res += b[co]+c2
    return res +"Run away,…"