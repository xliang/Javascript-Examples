/*
 	Function.prototype.call (thisValue, arg1?, arg2?, ...)
 	- thisValue: is the value that this will have inside the invoked function; 
*/

var jane = {
 name: 'Jane' ,
 sayHelloTo: function (otherName) {
 'use strict' ;
 console. log(this. name+' says hello to ' +otherName);
 }
};

jane.sayHelloTo("Mike"); 

jane.sayHelloTo.call(jane, "Mike"); 

var func = jane.sayHelloTo; 
func.call(jane, "Mike"); 