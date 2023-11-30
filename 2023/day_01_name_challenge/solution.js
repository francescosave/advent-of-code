const fs = require('fs');

// read input file
let content_page = fs.readFileSync('input.txt', 'utf8')

//let content_page = document.documentElement.innerText;
let lines = content_page.split('\n');


// functio of solution 1th star
function star1(lines) {

    var result = 0;

    for (index = 0; index < lines.length - 1; index++) {
        let element = lines[index];

        // code for star 1

    }

    return result;

}


// functio of solution 2th star
function star2(lines) {



    var result = 0;


    for (index = 0; index < lines.length - 1; index++) {
        let element = lines[index];

        // code for star 2

    }


    return result;

}


console.log('star1 ' + star1(lines));
console.log('STAR2 ' + star2(lines));
