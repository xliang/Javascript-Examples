/*

This means the publicField we have will always have the value “public” no matter 
how many instances of the object you created and if you change the value of it, 
it will be changed for all existing and new instances. 
This is the same for the publicFunction and the body of the function, 
but in the function you are able to access the state of the instance. 
This way you can write the function signature once, but access and change the state of the instance individually.

*/

function Class (p) {

	var privateField = p; 

	function privateFunction() {
		return privateField; 
	}

	this._privateFunction = privateFunction; 
}


Class.prototype.publicField = "public"; 
Class.prototype.publicFunction = function () {
	return this._privateFunction(); 
}; 

var instance1 = new Class("private_1"); 
console.log(instance1.publicField); 
console.log(instance1.publicFunction()); 


var instance2 = new Class("private_2"); 
console.log(instance2.publicField); 
console.log(instance2.publicFunction()); 
