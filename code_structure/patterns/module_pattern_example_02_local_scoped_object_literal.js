/*
	use an IIFE to define an object that acts as the Module container, attaches properties to it,
	then return it. 

	Module Pattern creates private variables. The one not attahed to the return value, such as guid, 
	act as private member, only accessible inside the Module by rest members of the created Closures. 

*/
var simpleguid_1 = (function () {
	// as a name space 
	var simpleguid = {}; 
	var guid; 

	simpleguid.init = function () {
		guid = 1; 
	};

	simpleguid.increaseCounter = function () {
		guid++
	};

	simpleguid.getNext = function () {
		var nextGuid = guid; 
		this.increaseCounter(); 
		return nextGuid; 
	}; 

	simpleguid.init(); 

	return simpleguid; 

})();

console.log(simpleguid_1.getNext());
console.log(simpleguid_1.getNext());
console.log(simpleguid_1.getNext());

