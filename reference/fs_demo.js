const fs = require('fs')
const path = require('path')


fs.writeFile(path.join(__dirname,'./test','hello.txt'),'Hello World',err=>{
    if (err) {
        throw err;
    }
    console.log("file createdd...");
 fs.appendFile(path.join(__dirname, '/test','hello.txt'),'Test',err=>{
     if (err) {
         throw err;
     }
     console.log("file hasbeen edited");
 });
});

fs.readFile(path.join(__dirname, '/test','hello.txt'), 'utf8', (err, data) =>{
    if (err) {
        throw err;
    }
    console.log(data)
})

// rename file

fs.rename(path.join(__dirname, '/test','hello.txt'), path.join(__dirname, '/test','test.txt'),err =>{
    if (err) {
        throw err;
    }
    console.log("file hasbeen renamed")
})