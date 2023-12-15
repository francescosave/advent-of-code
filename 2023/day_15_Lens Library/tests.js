const fs = require('fs');

// read input file
let content_page = fs.readFileSync('input.txt', 'utf8')

//let content_page = document.documentElement.innerText;
let lines = content_page.split(',');

// functio of solution 1th star
function star1(lines) {

    var result = 0;

    result = (((result+72)*17)% 256);
    result = (((result+65)*17)% 256);
    result = (((result+83)*17)% 256);
    result = (((result+72)*17)% 256);

    return result;

}

console.log('star1 ' + star1(lines));