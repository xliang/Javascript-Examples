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
