/*
 Javascript's variable declarations are "hoisted" to the beginning 
 of the function they appear in, but initializations stay where they are. 
 The javascript engine does not rewrite the code, the declaration is rehoisted 
 every time the function is executed. 

 Inside of a function, JavaScript first looks for all the variable declarations, 
 hoists their declarations to the top of the function, and then initializes them to undefined.

*/

function hoisted_1() {
	console.log(v); // the value is undefined
	var v = 1; 
}

// is same as below: 
function hoisted_2(){
	var v; 
	console.log(v); // the value is undefined 
	v = 1; 
}

hoisted_1(); 
hoisted_2();