/*



si potrebbe fare la replace dei numeri visitando a step di tre senza creare prima la matrice
capire se serve creare la cornice attorno di .

A quel punto rimangono solo i validi e li estrapolo con split e bonifica di caratteri empty e NaN


const line = '467..114..';
...*......
..35..633.
......#...
617*......
.....+.58.
..592.....
......755.
...$.*....
.664.598..
*/
console.clear();

let line = '.664.598..'.split('.');
//let line = '...*......'.split('.');

//console.log(line);

const new_line = line.filter(element => {
    return element > 0 ;
})

for (const iterator of new_line) {
    console.log(iterator,Number(iterator));
}

/*
console.log('...*......'.split('.'));
console.log('..35..633.'.split('.'));
console.log('......#...'.split('.'));
console.log('617*......'.split('.'));  // scartabile subito
console.log('.....+.58.'.split('.'));
console.log('..592.....'.split('.'));
console.log('......755.'.split('.'));
console.log('...$.*....'.split('.'));
console.log('.664.598..'.split('.'));
*/