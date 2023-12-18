const http = require('http');
const fs = require('fs');

const index = fs.readFileSync('index.html','utf-8');
const server = http.createServer((req,res)=>{
    res.setHeader('content-type','text/html')
    res.setHeader('Dummy','data')
    res.write('new beggining')    
    res.end(index);
});

server.listen(1212,(err)=>{
    if (err){
        console.log(err);
    }
    else
        console.log('server started...')
});