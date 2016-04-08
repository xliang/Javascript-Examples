/*
	Reference Data type: value is stored as reference
	Primitive Date type: data is stored as value

*/

// Primitive data type
var person = "Kobe"; 
var anotherPerson = person; 

console.log("Primitive Date Type: value cannot be changed. "); 
person = "Bryant"; 
console.log(person); 

console.log(anotherPerson); 

console.log("Reference Type - change the value"); 

var personObj = {name: "Kobe"}; 
var anotherPersonObj = personObj; 
personObj.name = "Bryant"; 

console.log(personObj.name); 
console.log(anotherPersonObj.name); 
