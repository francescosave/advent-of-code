const fs = require('fs');

// read input file
let content_page = fs.readFileSync('input.txt', 'utf8')

//let content_page = document.documentElement.innerText;
let lines = content_page.split('\n');


// functio of solution 1th star
function star1(lines) {

    var result = 0;
    let contatore = 0;

    for (index = 0; index < lines.length -1; index++) {
        let element = lines[index];

        // code for star 1
        
        const arr = (element.split(',').join('-').split('-'));
        //console.log(typeof(arr[0]))

        if ((+arr[0] <= +arr[2]  && +arr[1] >= +arr[3]) || (+arr[0] >= +arr[2]  && +arr[1] <= +arr[3]))
            contatore++;
                  
    }

    return contatore;

}


// function of solution 2th star
function star2(lines) {

    var contatore = 0;

    for (index = 0; index < lines.length-1; index++) {
        let element = lines[index];

        // code for star 2

        const arr = (element.split(',').join('-').split('-'));
        //console.log(typeof(arr[0]))

        if (!(+arr[1] < +arr[2] || +arr[0] > +arr[3]))
            contatore++;
         
    }

    return contatore;

}


console.log('star1 ' + star1(lines));
console.log('STAR2 ' + star2(lines));
