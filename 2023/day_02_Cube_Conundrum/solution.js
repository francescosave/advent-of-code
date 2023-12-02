const fs = require('fs');
const { off } = require('process');

// read input file
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


        // splittare per game : > parte sx [0]
        // splittare parte dx [1] con ;
        
        // splittare per ,
        // scrivere nell'oggetto
        // ripetere set successivo

        /*
        // costriure un oggetto che riporti tutte le info
        {
            game : 1
            set
        }
        */
        const game = element.split(':')[0];
        const game_sets = element.split(':')[1].split(';');


        const game_description = game.split(' ')[0];
        const game_id = game.split(' ')[1];
        
      
        

        for (const game_set of game_sets) {
            for (const game_subset of game_set.split(',')) {
                console.log(game_id,game_subset);
            }
            
        }
        
        
        //console.log(game_id,game_sets);


    }

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
