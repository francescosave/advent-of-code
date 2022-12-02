const fs = require('fs');

// read input file
let content_page = fs.readFileSync('input.txt','utf8')

//let content_page = document.documentElement.innerText;
let lines = content_page.split('\n');

// function of solution 1th star
function star1(lines){
   
    let score = 0;
    let elementstr = '';
    let msg = '' ;
    let count = 0 ;
    
    for (index = 0; index < lines.length; index ++) {
        
        
            let element = lines[index];

            // code for star 1
            
            elementstr = String(element.trim());

            switch (elementstr) {
                case "C X": case "A Y":case "B Z":
                    //msg += (' VITTORIA ' + elementstr);
                    count += 6                  
                    break;
                case "A X" : case "B Y": case"C Z":
                    //msg += (' PAREGGIO ' + elementstr);
                    count += 3                
                        break;
                default:
                    //console.log(elementstr);
                    break;
            }

            switch (elementstr) {
                case "A X" : case "B X": case "C X":
                    
                    //msg += (' extrapoint 1');
                    count += 1                 
                    break;
                case "A Y" : case "B Y": case "C Y":
                    
                    //msg += (' extrapoint 2');
                    count += 2                
                        break;
                case "A Z" : case "B Z": case "C Z":
                    
                    //msg += (' extrapoint 3');
                    count += 3               
                        break;
                default:
                    //console.log(elementstr);
                    break;
            }
            
            
            score += count;
    //console.log(msg +  ' '  + contatore);
    msg = '';
    count = 0;      
    }
    return score;

}


// functio of solution 2th star
function star2(lines){
   
    let result = 0;
    
    for (index = 0; index < lines.length - 2; index++) {

        for (index = 0; index < lines.length - 2; index++) {
            let element = lines[index];
            
            // code for star 2

        }
    }
    
    return result;

}


console.log('star1 ' + star1(lines));
//console.log('STAR2 ' + star2(lines));
