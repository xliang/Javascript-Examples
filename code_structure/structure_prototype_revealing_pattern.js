/*
It allows you to have private functions and variables inside the shared scope.
*/

function Class(){
	var privateField = "private"; 

	function privateFunction () {
		return privateField; 
	}

	this._privateFunction = privateFunction; 
}

Class.prototype = function() {

	var privateField = "Hello"; 
	var publicField = "public"; 

	function privateFunction () {
		return privateField + " " + this._privateFunction(); 
	}; 

	// revealing ... 
	return {
		publicField : publicField,
		publicFunction : privateFunction
	}
}; 


