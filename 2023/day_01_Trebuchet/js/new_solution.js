const fs = require('fs');

// read input file
//let content_page = fs.readFileSync('input_test.txt', 'utf8')
let content_page = fs.readFileSync('input.txt', 'utf8')

//let content_page = document.documentElement.innerText;
let lines = content_page.split('\n');


// functio of solution 1th star
function star1(lines) {

    var result = 0;

    for (index = 0; index < lines.length - 1; index++) {
        let element = lines[index];

        console.log(element);
        // code for star 1
        const only_number = [...element].filter((element) => Number(element)); 
        console.log( Number(only_number[0])  ,  Number(only_number.slice(-1)));
        result = result + Number(only_number[0] + only_number.slice(-1));
        console.log(result);
    }

    return result;

}

console.log('star1 ' + star1(lines));

