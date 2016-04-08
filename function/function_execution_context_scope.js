/*
	Every time a function is invoked, there is a new execution context. 

	All of the variables and functions defined in a function are considered part of the 
	execution context. 

	execution context is referring to "Scope". 

	A variable is considered "in scope" if it's accessible in teh current execution context.
	The variables and functions that are part of the execution context are stored on 
	the execution context object, an implementation of the ECMA standard for execution context. 
	The execution context object is an object in the JavaScript engine, and not a variable directly 
	accessible in JavaScript. it is easy enough to access indirectly, as every time you use a variable
	you are accessing an attribute of an execution context object. 

	Scope 

	1. Variable declarations are in scope from their point of declaration to the end of the funciton 
	within which they're declared, regardless of block nesting. 

	2. Named functions are in scope within the entire function within wihich they're declared, 
	regardless of block nesting (some call this as hosting)

	function can be forward-referenced, but not variable declarations. 

	3. Fo the purpose of declaration scopes, the global context acts like one big function encompasing the code on the page. 

	Each function invocation is passed two implicit parameters
	a. arguments, a colleciton of the actual pased arguments. 
	b. this, a reference to the object serving as the function context. 


*/

// walking up the scope chain. 
// if the variable is not defined in the function scope, it will use the global one. 

var regular_joe = 'regular joe'; 

function prison () {
	console.log(regular_joe); 
}

prison(); 

// regaular_joe is hoisted to the top of the function and hoisted declaration is checked 
// before looking for 
// rgular_joe in the global scope. 
// 

function prison2() {
	console.log(regular_joe); 
	var regular_joe; 
}

prison2(); 


/*
	Javascript engine makes two passes orver code when it come into scope. 
	1. it initialize variables
		1. declares AND initializes the function arguments (arg1, arg2)
		2. declares (ONLY) the local variables
	   		including anonymous functions assigned to a local variables, but does not initialize them
		3. declare AND initialize functions

	2. pass it executes code (execution )
*/

console.log("javascript varialble declarasion"); 

function myFunciton (arg1, arg2) { 	// step 1

	var local_var = 'foo';          // step 2
	a_function = function() {
		console.log('a function'); 
	}; 
		
	function inner() {              // step 3
		console.log('inner'); 
	}
}

console.log("example of variable hoisted and scope. "); 

function prison3(regular_joe) {
	// argument is assigned a value during first pass.  
	console.log(regular_joe); 
	
	var regular_joe; 
	// since regular_joe is assigned a value, it won't be overwritten with undefined when it is declared. 
	// This declaration is redundant. 
	console.log(regular_joe); 
}

prison3('the regular_joe argument'); 

console.log("javascript execution ... example ??"); 

console.log("scope chain example"); 

var regular_joe = 'I am here to save the day'; 

console.log (regular_joe); 

function supermax () {
	var regular_joe = 'regular_joe is assigned'; 

	console.log(regular_joe); 

	function prison () {
		var regular_joe; 
		console.log(regular_joe); 
	}

	prison(); 
}

supermax(); 
