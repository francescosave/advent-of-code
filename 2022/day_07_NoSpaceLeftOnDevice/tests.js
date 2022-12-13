/*
const result = {
 '/': {
  'a': {
    'b.txt': 23423,
    'c.dat': 345345
    'e': {
      'f': 29116,
      'g' : 2557
    }
  },
  'd': {
    'e': {
      'f': 29116,
      'g' : 2557
    }
  }
}
*/



/*
let file2 = {'name' : 'pippo.txt','size' : 102321}

const file = {name : 'file.txt',size : 0}
const metadata = {namedir : '<namedir>' ,totalsize : 200}
const root_content = {}

// add in object
root_content['/windows/']         = [{metadata},[file,file2]];
// push file and update metadata
//access to metadata
console.log(typeof(root_content['/windows/'][0].metadata.totalsize));
//access to file
console.log(typeof(root_content['/windows/'][1][0].size));

root_content['/windows/dir/']     = [{metadata},[]];
root_content['/windows/dir/bin/'] = [{metadata},[]];
root_content['/windows/sys/']     = [{metadata},[]];
root_content['/user/']            = [{metadata},[]];
root_content['/albatros/']        = [{metadata},[]];
root_content['/windows/paper/']   = [{metadata},[]];
root_content['/zorro/']           = [{metadata},[{file_zorro}]];

console.log('root_content\n', root_content ,'\n');

la chiave di root_content deve essere il nome della path/subpath/dirname
se non è stata aggiunta questa chiave associa un array contenetnte metadata e un array vuoto di file
se è stata gia aggiunta pusho il file e aggiorno metadata totalsize



//element['ative'] = false ;
//const arr = (Object.keys(root_content).sort());
const arr = (Object(root_content));

for (const iterator of Object.keys(root_content).sort()) {
    //console.log(iterator, root_content[iterator])
    //console.log(iterator)
}

var  key = '/windows/';

if (root_content[key] == undefined){

    console.log(key,'key is not present')
} else 
{
    //console.log(root_content[key][1][0])
    console.log(key,'key is present')
}
*/

/*

const fs = require('fs');

// read input file
let content_page = fs.readFileSync('input.txt', 'utf8')

//let content_page = document.documentElement.innerText;
let lines = content_page.split('\n');

// set actual_path to root
var actual_path = ['/'];

var file = {'name' : 'filename.ext','size' : 0}
var file_zorro = {'name' : 'pippo.txt','size' : 102321}

var metadata = {'dirname' : '', 'totalsize' : 10}
var root_content = {}


// functio of solution 1th star
function star1(lines) {

    var result = 0;

    for (index = 0; index < lines.length - 1; index++) {
        let element = lines[index].split(' ');
        //console.log('current path : ', actual_path.toString());
        // code for star 1
        //console.log(element)

        switch (element[0] ) {
            case '$':
                
                switch (element[1] + ' ' + element[2]) {
                    case 'cd /':
                        actual_path = ['/'];
                        break;
                    case 'cd ..':
                        actual_path.pop();
                        actual_path.pop();
                        break;
                    
                    default:
                        actual_path.push(element[2]);
                        actual_path.push('/');
                        break;
                }
                
                break;
            
            case 'dirs':
                // add folder in object if not exist
                let key = element[1];

                if (root_content[key] == undefined){
                    metadata.dirname = key; 
                    metadata.totalsize = 0;   
                    root_content[key]= [{metadata},[]];
                }

                //console.log(root_content[key])
                break;
            
            default:
                // add file in object and pull
                // update metadata to folder
                //root_content[element[actual_path[-2]]][1][0] = '';
                //root_content[element[actual_path[-2]]][1][0] = '';
                
                break;
        }

    }
    console.log(actual_path);
    return result;

}


*/

/*
console.clear();
var obj = { keys: undefined };
console.log(("key" in obj)); // true if "key" doesn't exist in object
console.log(!"not_key" in obj);   // Do not do this! It is equivalent to "false in obj"

*/


