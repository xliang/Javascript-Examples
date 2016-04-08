/**
 * Created by Owner on 6/19/2014.
 */

 /*
    Primitive wrapper type (String, Number, Boolean)
    make working with primitive values as easy as working working with objects.

 */


var s1 = "Some text";
var s2 = s1.substring(2);
// s1 is in a read mode

// 1. create an instance of String type        var s1 = new String("Some Text");
// 2. call specific method on teh instance     var s2 = s1.Substring(2);
// 3. Destroy the instance                     s1 = null

// this feature make primitive work as reference

console.log("--- object factory ---")
var obj = new Object("Some Text");
console.log((obj instanceof String));

// cast function
var value = "25";
var number = Number(value);
console.log(typeof number);

// Primitive Wrapper type
var obj = new Number(value);
console.log(typeof obj);

console.log("---Boolean Type---");

var falseObject = new Boolean(false); // never use this...
var result = falseObject && true; // in boolean expression, any object is convertted to true.
console.log(result);

var falseValue = false;
result = falseValue && true;
console.log(result);
