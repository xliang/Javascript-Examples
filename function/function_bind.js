/*
	bind, func.bind(thisValue, arg1, ..., argN)

	performs partial function application, a new function is created
	that calls func with thisValue and following arguments, arg1, ... argN
*/

// 'use strict'
var jane = {
	name : 'jane',
	describe : function () {
		return console.log("Person Name: " + this.name); 
	}
}; 

var func = jane.describe();
console.log("func is undefined. ");  
console.log (func === undefined); 

// the solution is to use function bind 

var func2 = jane.describe.bind(jane); 

func2(); 
