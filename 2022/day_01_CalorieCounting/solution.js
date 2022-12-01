const fs = require('fs');

let content_page = fs.readFileSync('input.txt','utf8')

//let content_page = document.documentElement.innerText;
let lines = content_page.split('\n');

function star1(lines){
    let arrresult = [];
    let contaCalorie = 0;
    let park = 0;
    //console.log(lines)
    for (index = 0; index < lines.length - 2; index++) {
        let element = lines[index];
        
        if(element == '') {
            //console.log('empty row');
            arrresult.push(parseInt(contaCalorie));
            contaCalorie = 0;
        } else {
            contaCalorie = +contaCalorie + +element
        }
    }
    
    arrresult.sort(function (a, b) {  return a - b;});
    return arrresult.at(-1);
}

function star2(lines){
    let arrresult = [];
    let contaCalorie = 0;
    let park = 0;
    //console.log(lines)
    for (index = 0; index < lines.length - 2; index++) {
        let element = lines[index];
        
        if(element == '') {
            //console.log('empty row');
            arrresult.push(parseInt(contaCalorie));
            contaCalorie = 0;
        } else {
            contaCalorie = +contaCalorie + +element
        }
    }
    
    arrresult.sort(function (a, b) {  return a - b;});
    return arrresult.at(-1)+arrresult.at(-2)+arrresult.at(-3);
}

console.log('star1 ' + star1(lines));
console.log('STAR2 ' + star2(lines));

