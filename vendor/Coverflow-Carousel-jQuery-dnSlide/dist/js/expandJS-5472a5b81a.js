Array.prototype.map || (Array.prototype.map = function (r, t) {
    var o, n, e;
    if (null == this) throw new TypeError(" this is null or not defined");
    var i = Object(this),
        p = i.length >>> 0;
    if ("[object Function]" != Object.prototype.toString.call(r)) throw new TypeError(r + " is not a function");
    for (t && (o = t), n = new Array(p), e = 0; e < p;) {
        var a, y;
        e in i && (a = i[e], y = r.call(o, a, e, i), n[e] = y), e++
    }
    return n
}), "function" != typeof Array.prototype.forEach && (Array.prototype.forEach = function (r) {
    for (var t = 0; t < this.length; t++) r.apply(this, [this[t], t, this])
}), Array.prototype.indexOf || (Array.prototype.indexOf = function (r) {
    for (var t = 0; t < this.length; t++)
        if (this[t] == r) return t;
    return -1
});