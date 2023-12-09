const fs = require('fs');

// read input file
let content_page = fs.readFileSync('input_test.txt', 'utf8')

//let content_page = document.documentElement.innerText;
let lines = content_page.split('\n');


// functio of solution 1th star
function star1(lines) {

    var result = 0;

    
    for (index = 0; index < lines.length - 1; index++) {
        let element = lines[index];

        // code for star 1
        
        const card_id = element.split(':')[0].trim().match(/(.{3,5})/g)[1];
        //const numeri_vincenti = element.split(':')[1].split('|')[0].trim().match(/(.{1,3})/g);
        //const tuoi_numeri = element.split(':')[1].split('|')[1].trim().match(/(.{1,3})/g);
        
        const numeri_vincenti = element.split(':')[1].split('|')[0].trim().replace(/\W?\s+/g," ").split(' ');
        const tuoi_numeri = element.split(':')[1].split('|')[1].trim().replace(/\W?\s+/g," ").split(' ');

        //const card_id = element.match(/.[0-9]{3,6}/g);

        console.log(tuoi_numeri);

        let ar =[]

        for (const numero of numeri_vincenti) {
            
            if( tuoi_numeri.includes(numero)){
                //console.log('incluso');
                ar.push(numero);
            }
            
            
            
        }
        
        result += getPoint(ar);
        console.log(getPoint(ar));
        

        

    }
    


    return result;

}


// functio of solution 2th star
function star2(lines) {
    var result = 0;
    
    let obj = {};

    
    for (index = 0; index < lines.length - 1; index++) {
        let element = lines[index];

        // code for star 1
        
        //const card_id = element.split(':')[0].trim().match(/(.{3,5})/g)[1];
        const card_id = element.split(':')[0].split(' ')[1];
        const numeri_vincenti = element.split(':')[1].split('|')[0].trim().replace(/\W?\s+/g," ").split(' ');
        const tuoi_numeri = element.split(':')[1].split('|')[1].trim().replace(/\W?\s+/g," ").split(' ');

        //console.log(numeri_vincenti);


        let tuoi_numeri_vincenti =[]

        for (const numero of numeri_vincenti) {
            
            if( tuoi_numeri.includes(numero)){
                //console.log('incluso');
                tuoi_numeri_vincenti.push(numero);
                obj[card_id] = tuoi_numeri_vincenti;
            }
       
        }




    }
    console.log(obj);
    return result;
}


//console.log('star1 ' + star1(lines));
console.log('STAR2 ' + star2(lines));

//console.log((getPoint([100,22,88,77])));

function getPoint(cards) {

    let result = 0;
    if(cards.length == 0)
        return result;
    
    result = 1;

        for (let index = 1; index < cards.length; index++) {
        //const card = cards[index];
        result *= 2;
        
    }

    return result;
}

function getPoint2(cards) {

    let result = 0;
    if(cards.length == 0)
        return result;
    
    result = 1;

        for (let index = 1; index < cards.length; index++) {
        //const card = cards[index];
        result *= 2;
        
    }

    return result;
}


