const http = require('http')

//create server

http.createServer((req,res) =>{
    //write response
    res.write("Hello world");
    res.end()
    
}).listen(3000, ()=> console.log("server runing..."))