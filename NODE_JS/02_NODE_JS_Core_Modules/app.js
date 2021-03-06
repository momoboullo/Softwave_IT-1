// load a module
const os = require('os');
const fs = require('fs');
const path = require('path');

// __dirname
console.log(`Dir Name : ${__dirname}`);

// __filename
console.log(`file Name : ${__filename}`);

// Path
let filePath = path.join(__dirname,'data','employees','data.txt');
console.log(`File Path : ${filePath}`);

// total memory
let totalMemory = os.totalmem();
console.log(`Total Memory : ${totalMemory}`);

// free memory
let freeMemory = os.freemem();
console.log(`Free Memory : ${freeMemory}`);

// hostname
let hostName = os.hostname();
console.log(`Host NAME : ${hostName}`);

// platform
let platform = os.freemem();
console.log(`Platform : ${platform}`);

// userInfo
let username = os.userInfo().username;
console.log(`User Name : ${username}`);

// fs module
// Create a new file / write to a file
let fileName = 'message.txt';
let fileContent = 'When file is a file descriptor, the behavior is similar to calling fs.write() directly (which is recommended). See the notes below on using a file descriptor.';
fs.writeFile(fileName,fileContent,'utf-8',(err) => {
    if(err) throw err;
    console.log('data is saved');
});

// read a file
fs.readFile(fileName,'utf-8',(err,data) => {
    if(err) throw  err;
    console.log(data);
});

// Create a new file inside 'data/employees/data.txt'
let newFilePath = path.join(__dirname,'data','employees','data.txt');
let newFileContent = 'When file is a file descriptor, the behavior is similar to calling fs.write() directly (which is recommended). See the notes below on using a file descriptor.';
fs.writeFile(newFilePath,newFileContent,'utf-8',(err) => {
    if(err) throw err;
    console.log('data is saved');
});

// read from app.js write  to -> /data/employees/program.txt
fs.readFile(path.join(__dirname,'app.js'),'utf-8',(err,data) => {
    if(err) throw  err;
    fs.writeFile(path.join(__dirname,'data','employees','program.txt'),data,'utf-8',() => {
       if(err) throw err;
       console.log('data is saved');
    });
});

