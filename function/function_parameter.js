/*
	Additional parameters will be ignored (except by arguments):
	Missing parameters will get the value undefined:

*/

// The following is a common pattern for assigning default values to parameters:

function pair(x, y) {
	 x = x || 0;  // (1)
	 y = y || 0;
	 return [ x, y ];
}

/* Enforcing an Arity
If you want to enforce an arity (a specific number of parameters), you can check
arguments.length:

*/

function pair(x, y) {
 	if (arguments. length !== 2) {
 		throw new Error('Need exactly 2 arguments' );
 	}
 // ...
}

// Simulating Named Parameters
// JavaScript does not have native support for named parameters like Python 
// and many other languages. But there is a reasonably elegant simulation: name parameters via an object literal, passed as a single actual parameter. 

function selectEntries(options) {
    options = options || {};
    var start = options.start || 0;
    var end = options.end || getDbLength();
    var step = options.step || 1;
 
}

// The function receives an object with the properties start, end, and step. You can omit any of them:

selectEntries({ start: 3, end: 20, step: 2 });
selectEntries({ step: 2 });
selectEntries({ end: 20, start: 3 });
selectEntries();
