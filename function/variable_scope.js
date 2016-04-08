/*
   Variables in javascript are hoisted to the top of its functional scope and 
   is assigned the value of undefined. 
   This has the effect of making it so that a variable declared anywhere 
   in a function exists throughout the entire function. 
//  
   javascript is function-scope language 
   Javascript engines makes two passes over code when it comes into scope

// first pass it initializes variables
// 1. declare and initializes the function arguments
// 2. declare the local variables, including anonymous functions assigned to local variables but 
//    does not initialize them
// 3. declare and initialize functions. 
// 
// second pass it executes code
// execution object context 
// EVERY time a function execution, there has a execution context

*/

var regular_joe = 'regular_joe is assigned'; 

function prison() {
	// the hoisted declaration is checked 
	// before looking for regular_joe in the global scope. 
	// so it will output undefined

	console.log (regular_joe); 
	var regular_joe; 
}

prison(); 

// variable has a value before they are declared
// 
var regular_tom = 'regular_tom is assigned'; 

function prison2(regular_tom) { // argument is declared and initialized as 'the regular_tom argument'
	console.log(regular_tom);   // output 'the regular_tom argument'
    
    // declare a local variable (undefined)
	var regular_tom; 

	// it is not overwritten with a undefined 
	console.log(regular_tom); 
}

// assign the argument value in the first pass 
prison2('the regular_tom argument'); 


console.log("No Block-Level Scopes");

// variable color is created and added to scope
if (true) {
    var color = "blue";
}
console.log(color);

for(var i = 0; i < 10; i++){

}

console.log(i);