const fs = require('fs');

//  OPEN FILE
// ------------------

// fs.open('file.txt','r+',(err,data)=>{
//     if (err) {
//         console.log(err);
//     }
//     else
//     console.log(`file open sucessfully....`);
// })

    //  WRITE FILE
// ---------------------

const data =  'make today amazing!. welcome';
// const file = 'never give up!';

// ===> asynchronous

fs.writeFile('file.txt',data,(err,data)=>{
    if (err) {
        console.log(err);
    }
    else
    console.log('file writen sucessfully..');
})

// ===> synchronous

// fs.writeFileSync('file.txt',file);
// console.log('file writen sucessfully..');


    //  READ FILE
// -----------------------

// ===> asynchronous

// fs.readFile('read.txt','utf-8',(err,data)=>{
//     if (err) {
//         console.log(err);
//     }
//     else
//     console.log('read file sucessfully!...'+data);
// })

// ===> synchronous

// fs.readFileSync('file.txt','utf-8');
// console.log('read file sucessfully'+data);

    // APPEND FILE
// ---------------------

// asynchronous

// const app = 'welcome to node js';
// const append = '\nlearn today';
// fs.appendFile('file.txt',app,(err,app)=>{
//     if (err) {
//         console.log(err);
//     }
//     else
//     console.log('file appended sucessfully!...');
// })

// let abc = fs.appendFileSync('read.txt',append);
// console.log('file appended sucessfully!...',abc);


    //  DELET FILE
// -------------------

// asynchronous

// fs.unlink('f1.txt',(err,data)=>{
//     if (err) {
//         console.log(err);
//     }
//     else
//     console.log('file deleting...');
// })

// synchronous

// fs.unlinkSync('f1.txt');
// console.log('file deleting...');

    // CLOSE FILE
// ---------------------

// fs.close
// Close the opened file.
// fs.close(fd, function(err) {
//     if (err) {
//         console.log(err);
//     } 
//     console.log("File closed successfully.");
//     }
// )    