var fs = require('fs');

var data = ''; 

var readerStream = fs.createReadStream('input.txt'); 

readerStream.setEncoding('UTF8'); 

/* This event is fired when there is data is available to read. */
readerStream.on('data', function(chunk) {
    data += chunk;
 });

 /* This event is fired when there is no more data to read. */
 readerStream.on('end', function () {
     console.log(data); 
 })

 /* This event is fired when there is any error receiving or writing data. */
 readerStream.on('error', function (err){
     console.log(err.stack); 
 }); 

 console.log("Program Ended."); 