/**
 * Created by Owner on 6/9/2014.
 */

console.log("Converting String: ");
console.log(Boolean("Blue"));
console.log(Boolean(""));

console.log("============="); 

console.log("Converting Number: ");
console.log(Boolean(5));
console.log(Boolean(0));
console.log(Boolean(-100));
console.log(Boolean(NaN));

console.log("============="); 

console.log("Converting Object: ");
var car = {
    name: "Ford"
};

var nullObject = null;

console.log("valid object is " + Boolean(car));
console.log("null is " + Boolean(nullObject));
console.log("empty object is " + Boolean({})); 
console.log("empty array is " + Boolean([])); 
console.log("============="); 

console.log("Converting Undefined");
var someUndefined;

console.log(Boolean(someUndefined));

