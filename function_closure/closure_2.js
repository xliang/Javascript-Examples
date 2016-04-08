// Each function executed within the loop will reference
// the last value stored in i (5).
// This won't behave as we want it to - every 100 milliseconds, 5 will alert

/*
for ( var i = 0; i < 5; i++ ) {
	setTimeout(function() {
		alert( i );
	}, i * 100 );
}
*/

/*

// Using a closure to create a new private scope
// fix: “close” the value of i inside createFunction, so it won't change
var createFunction = function( i ) {
	return function() {
		alert( i );
	};
};

for ( var i = 0; i < 5; i++ ) {
	setTimeout( createFunction( i ), i * 100 );
}

*/

// Closures can also be used to resolve issues with the this keyword, which is unique to each scope:
// Using a closure to access inner and outer object instances simultaneously.
var outerObj = {
	myName: "outer",
	outerFunction: function() {
	// Provide a reference to outerObj through innerFunction's closure
	var self = this;
	var innerObj = {
		myName: "inner",
		innerFunction: function() {
			console.log( self.myName, this.myName ); // "outer inner"
		}
	};

	innerObj.innerFunction();
	console.log( this.myName ); // "outer"
	}
};

outerObj.outerFunction();