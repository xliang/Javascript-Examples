const fs = require('fs'); 

/* wrap an callback-based asysnchronous function in a promise */

function readFilePromise (filePath){
    return Promise (
        (resolve, reject) => {
            fs.readFile(filePath, "utf8", (error, content) => {
                if (error) {
                    reject(error); 
                    return; 
                }
                resolve(content); 
            })            
        }
    ); 
}; 

/* general pattern */

function myPromiseBaseFunction (param1, param2, param3) {
    return new Promise (
            (resolve, reject) => {
                   // start your async funciton 
                   
                   /*  if failes */
                    reject(error); 
                    
                   /* */
                    resolve(operationResult); 
            } 
    ); 
}; 
