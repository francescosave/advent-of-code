const fs = require('fs');

// read input file
let content = fs.readFileSync('input.txt', 'utf8')

//let content_page = document.documentElement.innerText;
let lines = content.split('\n');

var count = 0;
var root_content = {}


// functio of solution 1th star
function star1(lines) {

    let result = 0;
    let current_path = ['/'];

    

    for (index = 0; index < lines.length - 1; index++) {

        const element = lines[index].split(' ');
        //console.log(lines[index]);
        var metadata = { namedir: '<namedir>', totalsize: 0 }
        let key = current_path.join('');


        if (element[0] == '$' && element[1] == 'cd') {

            // is $ cd and namedir or root / or ..
            if (element[2] === '/') {
                // is cd /
                current_path = ['/'];

            } else if (element[2] === '..') {
                //is cd ..
                current_path.pop();
                current_path.pop();

            } else {
                //is cd nameddir
                current_path.push(element[2]);
                current_path.push('/');


            };

        } else {

            //is sizefile and namefile
            if (!(element[0] == 'dir') && (!(element[0] == '$'))) {
                if (!(key in root_content)) {
                    let metadata = { namedir: 'pippo', totalsize: 0 }
                    root_content[key] = [{ metadata }, []];
                }

                var file = { name: element[1], size: element[0] };
                root_content[key][1].push(file);
                root_content[key][0].metadata.totalsize +=  (+file.size);

            } else {
                // is dir namedir or $ ls
                //console.log(element)
            }

        }

    }

    console.log(root_content);
    return result;

}

console.log('star1 ' + star1(lines));

for (const iterator of Object.keys(root_content)) {
    //console.log(iterator, root_content[iterator])
    //console.log(iterator,root_content[iterator][0].metadata.totalsize)
    //console.log(root_content[iterator][0].metadata.totalsize)
    if (+root_content[iterator][0].metadata.totalsize < 100000){
        count += +root_content[iterator][0].metadata.totalsize;
    }

}

console.log('totale ', count);

