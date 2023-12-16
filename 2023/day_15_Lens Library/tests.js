const fs = require('fs');

// read input file
let content_page = fs.readFileSync('input_test.txt', 'utf8')

//let content_page = document.documentElement.innerText;
let lines = content_page.split(',');

// functio of solution 1th star
function star2(lines) {

    var result = 0;

    lines.forEach((line,idx) => {
                
        let char_split = '';
        const line_split = line.split('');

        if(line_split.includes('=')){
            char_split='=';
        } else if(line_split.includes('-')){
            char_split='-';
        } else {
            //console.log(line,(!line.split('').includes('=') ^ !line.split('').includes('-')));
            console.log(idx,')LINE NOT VALID - CHAR SPLIT NOT PRESENT');
            return;
        }
           
        /*    
        if(line.split().includes('-'))
            return
        */
        
        //console.log(idx + ')' + line,getHash_string(line));
        console.log(idx+')'+line,(!line.split('').includes('=') ^ !line.split('').includes('-')));

    });

    return result;

}

console.log('STAR 2',star2(lines));

/* solution 1
console.log('star1 ' + star1(lines));

rn: 1 (casella 0) * 1 (primo slot) * 1 (lunghezza focale) = 1
cm: 1 (casella 0) * 2 (secondo slot) * 2 (lunghezza focale) = 4
ot: 4 (riquadro 3) * 1 (primo slot) * 7 (lunghezza focale) = 28
ab: 4 (riquadro 3) * 2 (secondo slot) * 5 (lunghezza focale) = 40
pc: 4 (riquadro 3) * 3 (terzo slot) * 6 (lunghezza focale) = 72


console.log(getHash_string('rn'));
console.log(getHash_string('qp'));
console.log(getHash_string('ot'));
console.log(getHash_string('ab'));
console.log(getHash_string('pc'));
*/

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
