// empty object
var myObj = {};

// it is same as
var myObj1 = new Object();

// object literal notation
var spa = {
	title: "Single Page Web Application",  // attribute
	authors: ["Mike Mikowski", "John"],    // array 
	
	buy_now: function() {                  // function 
		console.log("Book is purchased");
	}
}

console.log("---object literal---");

var person = {};
person.name = "john";

console.log(person["name"]);
console.log(person.name);

