const fs = require('fs');

// read input file
let content_page = fs.readFileSync('input_text.txt', 'utf8')

//let content_page = document.documentElement.innerText;
let lines = content_page.split('\n');


// functio of solution 1th star
function star1(lines) {

    var result = 0;

    let arrays = [];
    let array = [];

    for (index = 0; index < lines.length - 1; index++) {
        let element = lines[index];
        
        let arr = element.split('');
        arr.pop();

        array.push(arrays.concat(['.'],arr ,['.']))
        
        //console.log(array);
        // code for star 1

    }

    console.log(array);
    return result;

}




console.log('star1 ' + star1(lines));

