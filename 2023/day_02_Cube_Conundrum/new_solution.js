const fs = require('fs');
const { off } = require('process');

// read input file
let content_page = fs.readFileSync('input.txt', 'utf8')

//let content_page = document.documentElement.innerText;
let lines = content_page.split('\n');


// functio of solution 1th star
function star1(lines) {

    var result = 0;
    
    const max_red = 12;
    const max_green = 13;
    const max_blue = 14;


    let games = [];
    

    for (const game_line of lines) {
       
        //console.log(line);
    
        const game = game_line.split(':')[0];
        const game_sets = game_line.split(':')[1].split(';');

        const game_description = game.split(' ')[0];
        const game_id = game.split(' ')[1];
        let is_valid = true;

        let game_obj ={};
        game_obj.game_id = game_id;
        let number_set = 0;

        for (const game_set of game_sets) {
            
           
            
            for (const game_subset of game_set.split(',')) {
                
                const cubes_total = game_subset.trim().split(' ')[0];
                const cubes_color = game_subset.trim().split(' ')[1];

                //console.log(game_id,game_subset.trim().split(' ')[0] + game_subset.trim().split(' ')[1]);
                               
                if (cubes_color === 'red' && cubes_total > max_red)
                    is_valid = false;
                if (cubes_color === 'green' && cubes_total > max_green)
                    is_valid = false;
                if (cubes_color === 'blue' && cubes_total > max_blue)
                    is_valid = false;

                
               
                
            }
            number_set++;
            
        }
        
        game_obj.number_set = number_set;
        game_obj.is_valid = is_valid;
        games.push(game_obj);  
         
        //console.log(game_id,game_sets);
       


    }

    console.log(games);
    


    result = games.reduce((accumulator, currentValue) => {
        
        if(currentValue.is_valid) {
            accumulator = accumulator + +currentValue.game_id;
        }
            
        return accumulator},0);

    return result;

}


// functio of solution 2th star
function star2(lines) {



    var result = 0;
    
    

    let games = [];
    

    for (const game_line of lines) {
       
        //console.log(line);
    
        const game = game_line.split(':')[0];
        const game_sets = game_line.split(':')[1].split(';');

        const game_description = game.split(' ')[0];
        const game_id = game.split(' ')[1];
        let is_valid = true;

        let game_obj ={};
        game_obj.game_id = game_id;

        let max_red = 0;
        let max_green = 0;
        let max_blue = 0;


        for (const game_set of game_sets) {
            
           
            
            for (const game_subset of game_set.split(',')) {
                
                const cubes_total = game_subset.trim().split(' ')[0];
                const cubes_color = game_subset.trim().split(' ')[1];
                //console.log(game_id,game_subset.trim().split(' ')[0] + game_subset.trim().split(' ')[1]);

                if (cubes_color === 'red' && cubes_total > max_red)
                    max_red = +cubes_total;
                
                if (cubes_color === 'green' && cubes_total > max_green)
                    max_green = +cubes_total;
                
                if (cubes_color === 'blue' && cubes_total > max_blue)
                    max_blue = +cubes_total;

                              
            }
            
        }

                game_obj.max_red = max_red;
                game_obj.max_green = max_green;
                game_obj.max_blue = max_blue;
        
        games.push(game_obj);  
        //console.log(game_id,game_sets);
       
    }

    console.log(games);
    


    result = games.reduce((accumulator, currentValue) => {
        
       
            accumulator +=  currentValue.max_red * currentValue.max_green * currentValue.max_blue;
      
            
        return accumulator},0);

    return result;

}


console.log('star1 ' + star1(lines));
//console.log('STAR2 ' + star2(lines));
