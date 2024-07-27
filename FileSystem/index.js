// Syncronus Programming file System ):


const fs = require('fs')



// 1. create a new folder using file module

// fs.mkdirSync('SynchFile')
// console.log('created  folder');




//2. create anew file inside SynchFile

// fs.writeFileSync('./SynchFile/demo.txt','hello world')
// console.log('file is created');





// 3. Update my demo.txt file 


// fs.appendFileSync('./SynchFile/demo.txt',' how can i help you')
// console.log('file is updated');



// 4. Read file demo.txt 

// const Read = fs.readFileSync('./SynchFile/demo.txt','utf-8')
// console.log(Read);




// 5. rename file demo.txt to MyFile.txt

// fs.renameSync('./SynchFile/demo.txt','./SynchFile/MyFile.txt')
// console.log('file is renemed');



// check file path
// const a =fs.realpathSync('MyFile.txt')
// console.log(a);





// 6.  Delete file MyFile.txt

// fs.unlinkSync('./SynchFile/MyFile.txt')
// console.log('file is sucssecfully deleted');








// asyncronus Programming file System ):


// 1. Folder is creted asyncronusly

// fs.mkdir('./FileSystem/AsynchFile',(err)=>{
//     console.log('folder is created');
// })





// 2. create a new file asyncronusly 

// fs.writeFile('./FileSystem/AsynchFile/async.txt',"it s async programming file",(err)=>{
//     console.log('async file is created',err);
// })


// 3. Update a File  async

// fs.appendFile('./FileSystem/AsynchFile/async.txt',' Add some data like what are you ding',(err=>{
//     console.log('data is update');
// }))


// 4. Read File using Async

// fs.readFile('./FileSystem/AsynchFile/async.txt','utf-8',(err,data)=>{
//     console.log(data);
// })



// path check
// fs.realpath('./FileSystem/AsynchFile/async.txt',(err,data)=>{
//     console.log(err,data);
// })


// 5. Rename File async function

// fs.rename('./FileSystem/AsynchFile/async.txt','./FileSystem/AsynchFile/newasync.txt',(err)=>{
//     console.log('file is rename',err); 
// })



// 6 Delete file async 

// fs.unlink('./FileSystem/AsynchFile/newasync.txt',(err)=>{
//     console.log('file is removed');
// })

// ////////////////////////////////////////////////
// remove directry
// fs.rmdir('AsynchFile',(err)=>{
//     console.log('done remove dir');
// })

// console.log('hii akshay');







