const fs = require('fs');

// read input file
let content_page = fs.readFileSync('input_text.txt', 'utf8')

//let content_page = document.documentElement.innerText;
let lines = content_page.split('\n');
lines.unshift('..................................................');
lines.push   ('..................................................');

// functio of solution 1th star
function star1(lines) {

    var result = 0;

    let number_list = [];
    let tmpnumber = '';

    for (index = 1; index < lines.length-1; index++) {
        let element = lines[index];

        console.log('\n--------------');
        console.log(element);
        console.log('--------------\n');
        // code for star 1

        for (let index = 0; index < element.length; index++) {
            const character = element[index];
            if(Number(character) > 0){
                tmpnumber += character
                console.log(character);
            }else {
                // verify if found symbol in orbit
                // controllo linea sopra se > 0 , controllo index-1 index index+1
                // controllo linea corrente a sx se > 0 e dx se < di lenght
                // controlo linea sotto se minore di lenght , controllo index-1 index index+1

                number_list.push(tmpnumber);
                tmpnumber = '';
            }
                
            
        }

    }

    number_list = number_list.filter(element => {
        return element > 0 ;
    }) // 617 not valid adiacent dx * 617*
    console.log(number_list);
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
