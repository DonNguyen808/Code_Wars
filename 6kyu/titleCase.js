function titleCase(title, minorWords) {
    var minorWords = typeof minorWords !== "undefined" ? minorWords.toLowerCase().split(' ') : [];
    return title.toLowerCase().split(' ').map(function(v, i) {
        if (v != '' && ((minorWords.indexOf(v) === -1) || i == 0)) {
            v = v.split('');
            v[0] = v[0].toUpperCase();
            v = v.join('');
        }
        return v;
    }).join(' ');
}

example = 'The clash of KINGS'

minor = 'the of'

console.log(titleCase(example, minor)) // should return: 'The Clash of Kings'