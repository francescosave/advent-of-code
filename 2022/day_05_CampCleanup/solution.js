const { Console } = require('console');
const fs = require('fs');

// read input file
let content_page = fs.readFileSync('input.txt', 'utf8')

//let content_page = document.documentElement.innerText;
let lines = content_page.split('\n');



/*

[V]     [B]                     [C]
[C]     [N] [G]         [W]     [P]
[W]     [C] [Q] [S]     [C]     [M]
[L]     [W] [B] [Z]     [F] [S] [V]
[R]     [G] [H] [F] [P] [V] [M] [T]
[M] [L] [R] [D] [L] [N] [P] [D] [W]
[F] [Q] [S] [C] [G] [G] [Z] [P] [N]
[Q] [D] [P] [L] [V] [D] [D] [C] [Z]
 1   2   3   4   5   6   7   8   9 

 */

var arr = [['Q', 'F', 'M', 'R', 'L', 'W', 'C', 'V'],
            ['D', 'Q', 'L'],
            ['P', 'S', 'R', 'G', 'W', 'C', 'N', 'B'],
            ['L', 'C', 'D', 'H', 'B', 'Q', 'G'],
            ['V', 'G', 'L', 'F', 'Z', 'F'],
            ['D', 'G', 'N', 'P'],
            ['D', 'Z', 'P', 'V', 'F', 'C', 'W'],
            ['C', 'P', 'D', 'M', 'S'],
            ['Z', 'N', 'W', 'T', 'V', 'M', 'P', 'C']
            ];

var arr2 = [['Q', 'F', 'M', 'R', 'L', 'W', 'C', 'V'],
['D', 'Q', 'L'],
['P', 'S', 'R', 'G', 'W', 'C', 'N', 'B'],
['L', 'C', 'D', 'H', 'B', 'Q', 'G'],
['V', 'G', 'L', 'F', 'Z', 'F'],
['D', 'G', 'N', 'P'],
['D', 'Z', 'P', 'V', 'F', 'C', 'W'],
['C', 'P', 'D', 'M', 'S'],
['Z', 'N', 'W', 'T', 'V', 'M', 'P', 'C']
];


// functio of solution 1th star
function star1(lines) {

    var result = '';
     
    for (index = 10; index < lines.length -1; index++) {
        let element = lines[index];
        
        const arrElement = element.split(' ');
        const move =    +(+arrElement[1]);
        const fromIdx = +(+arrElement[3]-1);
        const toIdx =   +(+arrElement[5]-1);
        
        arr[toIdx] = arr[toIdx].concat((arr[fromIdx].slice(arr[fromIdx].length - move,arr[fromIdx].length).reverse()));
            for (let index = 0; index < move ; index++) 
                arr[fromIdx].pop();
                 
    }
    
    for (let index = 0; index <= 8; index++) 
        result +=  arr[index][arr[index].length-1]

    return result;

}


// functio of solution 2th star
function star2(lines) {



    var result = '';
     
    for (index = 10; index < lines.length -1; index++) {
        let element = lines[index];
        
        const arrElement = element.split(' ');
        const move =    +(+arrElement[1]);
        const fromIdx = +(+arrElement[3]-1);
        const toIdx =   +(+arrElement[5]-1);
        
        arr2[toIdx] = arr2[toIdx].concat((arr2[fromIdx].slice(arr2[fromIdx].length - move,arr2[fromIdx].length)));
            for (let index = 0; index < move ; index++) 
                arr2[fromIdx].pop();
                 
    }
    
    for (let index = 0; index <= 8; index++) 
        result +=  arr2[index][arr2[index].length-1]

    return result;

}


console.log('star1 ' + star1(lines));
console.log('STAR2 ' + star2(lines));
