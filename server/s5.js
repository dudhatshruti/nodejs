const http = require('http');
// const fs = require('fs');

const server = http.createServer((req,res)=>{
    res.setHeader('content-type','text/html')
    res.write('<h1> server 5 </h1>')
    // res.end(index);
});

server.listen(1216,(err)=>{
    if (err) {
        console.log(err);
    }
    else
        console.log('server started...')
});