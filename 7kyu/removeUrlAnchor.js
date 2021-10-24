function removeUrlAnchor(url) {
    return url.split('#')[0];
}

url = 'www.codewars.com#about'

// expected output: www.codewars.com
console.log(removeUrlAnchor(url), 'www.codewars.com')

