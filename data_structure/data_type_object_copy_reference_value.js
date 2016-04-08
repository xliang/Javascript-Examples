/**
 * Created by Owner on 6/16/2014.
 */

// copy by reference
var obj1 = new Object();
var obj2 = obj1;
obj1.name = "John";
console.log(obj2.name);

// Argument Passing
// All function argument are passed by value.
// primitive -> copy by value
// reference -> copy by reference

console.log("---Passing primitive argument---");

function addTen(num) {
    num += 10;
    return num;
}

var count = 20;
var result = addTen(count);
console.log(count); // copy by value
console.log(result);

console.log("---Passing reference argument---")

function setName(obj) {
    obj.name = "Nick";
    return obj;
}
var person = new Object();
setName(person);
console.log(person.name); // copy by reference

