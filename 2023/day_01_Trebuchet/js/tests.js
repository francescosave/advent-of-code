function onlyNumber(text) {

    return  [...text].filter((word) => Number(word)).join('');
    
}




console.log(onlyNumber('sxzhzzpzonevrllpblsfnxzknmpconefktdt'));

/*
console.clear();

let word = [...'fouronevhnrz44'];


for (const element of word) {
    console.log(element,!(Number(element)));
}
// non ha senso sta cosa
*/


/*
let word = [...'fouronevhnrz44'];
//console.log(word);

for (const element of word) {
    console.log(element,Number(element));
}
// Number(word) restituisce number se fallisce Nan
*/