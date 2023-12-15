const fs = require('fs');

// read input file
let content_page = fs.readFileSync('input.txt', 'utf8')

//let content_page = document.documentElement.innerText;
let lines = content_page.split(',');


// functio of solution 1th star
function star1(lines) {

    var result = 0;

    for (index = 0; index < lines.length; index++) {
        let element = lines[index];
       
        // code for star 1
        console.log(getHash_string(element));
        result += getHash_string(element);

    }

    return result;

}


// functio of solution 2th star
function star2(lines) {



    var result = 0;


    for (index = 0; index < lines.length - 1; index++) {
        let element = lines[index];

        // code for star 2
        //console.log(element);

    }



    return result;

}


function getHash(char_ascii_code) {
    
    let result =  (char_ascii_code*17)% 256 ;
   
    return result;
}

function getHash_string(string) {
    let result = 0;
    let prev = 0;

        for (const char of string) {
            result = getHash(result+char.charCodeAt(0));
            //console.log(result);
        }
    
    return result;
}


console.log('star1 ' + star1(lines));

//console.log(getHash_string("HASH"));

//console.log('STAR2 ' + star2(lines));
