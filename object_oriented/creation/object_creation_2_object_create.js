/*
	Object.create(prototype, descriptors)

	Creates an object that has the specified prototype, and that optionally contains specified properties.
	
*/

var genericAnimal = Object.create(null); // create a empty object
genericAnimal.name = 'Animal';
genericAnimal.gender = 'female';
genericAnimal.description = function() {
	return 'Gender: ' + this.gender + '; Name: ' + this.name;
};

console.log(genericAnimal.description()); 

var cat = Object.create(genericAnimal);
cat.purr = function() {
	return 'Purrrr!';
};

console.log(cat.purr()); 
console.log(cat.description()); 

var colonel = Object.create(cat);
colonel.name = 'Colonel Meow';

var puff = Object.create(cat);
puff.name = 'Puffy';

/*

Douglas Crockford recommends including the following code in your JavaScript applications 
to ensure that Object.create is created if it is not there:

*/
if (typeof Object.create !== 'function') {
	Object.create = function (o) {
		function F() {}
		F.prototype = o;
		return new F();
	};
}
