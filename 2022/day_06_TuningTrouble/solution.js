const fs = require('fs');

// read input file
let content_page = fs.readFileSync('input.txt', 'utf8')

//let content_page = document.documentElement.innerText;
let lines = content_page.split('');


// functio of solution 1th star
function star1(lines) {

    var result = 0;
    var markerStartTo = 4;    

    for (index = 0; index < lines.length - markerStartTo ; index++) {
        let element = lines[index];

        // code for star 1
        let chars = [];
       for (index2 = 0; index2 < markerStartTo; index2++) {
    
            chars.push(lines[index+index2]);
           
        }

        let uniqueChars = [...new Set(chars)];
        //console.log(uniqueChars, uniqueChars.length,index);
        
        if (uniqueChars.length == markerStartTo) return index + markerStartTo;

    }

    return undefined;

}


// functio of solution 2th star
function star2(lines) {
    var result = 0;
    var markerStartTo = 14;    

    for (index = 0; index < lines.length - markerStartTo ; index++) {
        let element = lines[index];

        // code for star 1
        let chars = [];
       for (index2 = 0; index2 < markerStartTo; index2++) {
    
            chars.push(lines[index+index2]);
           
        }

        let uniqueChars = [...new Set(chars)];
        //console.log(uniqueChars, uniqueChars.length,index);
        
        if (uniqueChars.length == markerStartTo) return index + markerStartTo;

    }

    return undefined;
}


console.log('star1 ' + star1(lines));
console.log('STAR2 ' + star2(lines));
