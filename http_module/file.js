const http = require('http');
const fs = require('fs');
const port = 1213;
const server = http.createServer();
const index = fs.readFileSync('index.html','utf-8');
const product = JSON.parse(fs.readFileSync('product.json','utf-8'));
const friend = {
    "name" : "skill",
    "intro" : "decode your skill"
}
server.on('request',(req,res)=>{
    console.log(req.url);

   let item = req.url.split('/');
    console.log(item);

    if (item[1] ==='user') {
        res.setHeader('content-type','text/html'); 
        res.end(index);
        }
    else if(item[1]=== 'product'){
        res.setHeader('content-type','application/json'); 
        if (item.length ===3) {
            let id = +item[2];
            const prod = product.find((p)=>p.id === id)
            res.end(JSON.stringify(prod));
        }
        else{
            res.end(JSON.stringify(product));
        }
     }  
    else if(item[1]==='friend'){
            res.setHeader('content-type','application/json'); 
            res.end(JSON.stringify(friend));
        }   
   else
    {
        res.end('page not found...');
    }     
    // switch (req.url) {
    //     case '/':
    //         res.setHeader('content-type','text/html');
    //         res.end(index);
    //         break;
    //     case '/product':
    //         res.setHeader('content-type','application/json'); 
    //         res.end(JSON.stringify(product));  
    //     case '/friend' :
    //         res.setHeader('content-type','application/json');
    //         res.end(JSON.stringify(friend)); 
    //         break;    
    //         default:
    //         res.end('page not found');
    //         break;
    // }
})


server.listen(port,(err)=>{
    if (err) {
        console.log(err);
    }
    else
    console.log(`server started...${port}`);
})