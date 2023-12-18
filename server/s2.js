const http = require('http');
// const fs = require('fs');

const server = http.createServer((req,res)=>{
    res.setHeader('content-type','text/html')
    // res.write('welcome page')
    res.end('<h1>server 2</h1>')
    // res.end(index);
});

server.listen(1213,(err)=>{
    if (err) {
        console.log(err);
    }
    else
        console.log('server started...')
});