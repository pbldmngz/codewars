def count_smileys(arr):
    smiley, counter= [":)", ":-)",":~)",";)", ";-)",";~)",":D", ":-D",":~D",";D", ";-D",";~D"], 0
    for i in range(len(arr)):
        if arr[i] in smiley: counter += 1
    return counter