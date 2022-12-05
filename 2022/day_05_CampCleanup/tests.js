
var arrFrom = ['Z', 'N', 'W', 'T', 'V', 'M', 'P', 'C']
var arrTo = ['D', 'Q', 'L'];
const move = 1;

console.log(arrFrom.toString());
console.log(arrTo.toString());
console.log('----------------------------------------------');
console.log(`------------- move ${move} -------------------`);
console.log('----------------------------------------------');


// lenght - move from 
// move 3 

console.log(arrTo.concat( arrFrom.slice(arrFrom.length - move,arrFrom.length).reverse()).toString() );
for (let index = 0; index < move ; index++) 
arrFrom.pop();
    
console.log(arrFrom.toString());

