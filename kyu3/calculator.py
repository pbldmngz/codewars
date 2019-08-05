import re
class Calculator(object):
    def evaluate(self, string):
        string = string.replace(' ', '')
        while "--" in string:
            string = string.replace('--', '+')
        while "++" in string:
            string = string.replace('++', '+')
        while "+-" in string:
            string = string.replace('+-', '-')

        sym = [] 
        string = list(string)
        a_aux = 0
        
        while a_aux < len(string):
            if "-" in string[a_aux]: 
                string.insert(a_aux, " ")
                a_aux += 1
            a_aux += 1
        for i in string: 
            if i in "*/+":
                sym.append(i)
            if i == "-":
                sym.append(" ")
        string = "".join(string)
        string = re.split("[*/+ ]", "".join(string)) 
        i_aux = 0
        while i_aux < len(string):
            if string[i_aux] == "": 
                del string[i_aux]
                i_aux -= 1
            i_aux += 1
        string = list(map(lambda x: float(x), string)) 
        
        op = ["/", "*", "+"]
        if op[0] in sym:
            while op[0] in sym:
                string[sym.index(op[0])] = string[sym.index(op[0])] / string[sym.index(op[0])+1]
                del string[sym.index(op[0])+1]
                del sym[sym.index(op[0])]
        if op[1] in sym:
            while op[1] in sym:
                string[sym.index(op[1])] = string[sym.index(op[1])] * string[sym.index(op[1])+1]
                del string[sym.index(op[1])+1]
                del sym[sym.index(op[1])]
        if op[2] in sym:
            while op[2] in sym:
                string[sym.index(op[2])] = string[sym.index(op[2])] + string[sym.index(op[2])+1]
                del string[sym.index(op[2])+1]
                del sym[sym.index(op[2])] 
        val = 0
        for v in string:
            val += v
        string = val
        
        return string