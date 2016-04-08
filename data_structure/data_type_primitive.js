/**
 * Created by Owner on 7/14/2014.
 */

// primitive Types

/*
- Boolean
- Number
- String
- Null
- Undefined

All others are objects

A major difference between the two is how thy are compared. 
Object has it own identity 

 */

console.log("If you assign a primitive value to variable, the value is copied into that variable");

var color1 = "red";
var color2 = color1;

console.log(color1);
console.log(color2);

color1 = "blue";
console.log(color1);
console.log(color2);