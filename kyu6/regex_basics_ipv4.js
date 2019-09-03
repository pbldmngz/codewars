String.prototype.ipv4Address=function(){
    return /^(((25[0-5])|(2[0-4]\d|1\d\d|[1-9]?\d))\.){4}$/.test(this+".")
}