const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res)=>{
    res.setHeader('content-type','')
    res.write('<h1>server 4</h1>')
    // res.end(index);
});

server.listen(1215,(err)=>{
    if (err) {
        console.log(err);
    }
    else
        console.log('server started...')
});