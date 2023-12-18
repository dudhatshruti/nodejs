const http = require('http');
const fs = require('fs');

const data = fs.readFileSync('demo.html','utf-8');
const server = http.createServer((req,res)=>{
    res.setHeader('content-type','text/html')
    res.write('<h1> server 3 </h1>')
    res.end(data);
});

server.listen(1214,(err)=>{
    if (err) {
        console.log(err);
    }
    else
        console.log('server started...')
});