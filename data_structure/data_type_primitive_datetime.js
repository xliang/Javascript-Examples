var current = Date(); 

console.log("Today's date: " + current); 

var date1 = new Date('Fri Apr 03 2015 15:00:00 GMT-0400 (Eastern Daylight Time)'); 

console.log("=== Javascript Date Issue ==="); 
console.log("Date1: " + date1); 
console.log("Date1.toJSON: " + date1.toJSON()); // convert UTC by adding the offset
console.log("JSON.stringify(): " + JSON.stringify(date1)); 

console.log("=== Workaround ==="); 

date1.setHours(date1.getHours() - date1.getTimezoneOffset() / 60); 
console.log("Date1 after change: " + date1); 
console.log("Date1.toJSON: " + date1.toJSON()); 
console.log("JSON.stringify(): " + JSON.stringify(date1)); 
 

var curdate = new Date()
var offset = curdate.getTimezoneOffset()
console.log(offset); 

var date2 = new Date(); 
console.log("Date2 " + date2); 
date2.setHours(date2.getHours() - date2.getTimezoneOffset() / 60); 
console.log("Date2 " + date2); 

var date3 = new Date(); 
console.log(new Date(date3.valueOf() - date3.getTimezoneOffset() * 60000).toJSON().substring(0, 23)); 
