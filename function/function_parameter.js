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