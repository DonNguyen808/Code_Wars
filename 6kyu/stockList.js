function stockList(listOfArt, listOfCat) {
    qs = {};
    if (!listOfArt.length) return '';

    listOfArt.forEach(function(art) {
        var cat = art[0];
        qs[cat] = (qs[cat] | 0) + +art.split(' ')[1];
    });

    return listOfCat.map(function(c) {
        return '(' + c + ' : ' + (qs[c] | 0) + ')';
    }).join(' - ');
}

b = ["CBART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"]
c = ["A", "B", "C", "W"]
res = '(A : 0) - (B : 114) - (C : 70) - (W : 0)'

console.log(stockList(b, c), res)