const path = require('path');

let filename = path.basename(__filename);
let file = path.dirname(__filename);
let dirname = path.dirname(__dirname);
let split = file.split("\\");


if (split[4]) {
    console.log(path.join(file, filename))
}


//split dir
console.log(dirname.split('\\'));
//base filename
console.log(path.basename(__filename));

//directoru name
console.log(path.dirname(__filename));

//concate join
console.log(path.join(dirname,filename));

// get extension
console.log(path.extname(filename));

// create path object
console.log(path.parse(filename));

