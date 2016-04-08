/*
	undefined means "no value". Unintialized variables are undefined.

	> var foo; 
	> foo
	undefined

	> var obj = {}; // empty object
	> obj.foo
s	undefined

	null means "no object". it is used as a nonvalue whenever an object is expected 
*/

var myData = {
	name: "Adam",
	weather: "sunny"
}; 

// undefined value is returned when you read a variable that has not had a value assigned to it
// or try to read an object property that doesn't exist
// 
console.log ("object property not exist : " + myData.doesnotexist); 

// undefined value is returned when no value is defined, and null is used when you want to indicate
// that you have assigned a value that value is not a valid object, string,number or boolean.

var myData = {
    name: "Adam"
};

console.log("Var: " + myData.weather);
console.log("Prop: " + ("weather" in myData));

myData.weather = "sunny";
console.log("Var: " + myData.weather);
console.log("Prop: " + ("weather" in myData));

// null is empty object pointer        
myData.weather = null;
console.log("Var: " + myData.weather);            
console.log("Prop: " + ("weather" in myData));

// it is advisable to initialize the variable to null as opposed to anything else
// that way, you can explicitly check for the value null to determine if the variable has
// been filled with an object reference at later time.

var car = null;
//...
if (car == null ) {
    // do something...
}

// undefined is a derivative of null
// it should return true
console.log ("Check null == undefined: ");
console.log (null == undefined);
