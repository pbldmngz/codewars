import re
def first_non_repeating_letter(string):
    for i in string:
        if len(re.findall(i.casefold(), string.casefold())) == 1:
            return i
    return ""