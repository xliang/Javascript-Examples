/**
 * Created by Owner on 6/17/2014.
 */

// push can add the items in sequence, but pop or shift() behave different to have either like stack or queue


// Stack Push/Pop

var colors = new Array();
var count = colors.push("red", "green");
console.log(count);
console.log(colors[0]);
console.log(colors[1]);


colors.push("black");

console.log(colors.toString());

var item = colors.pop();
console.log(item);
console.log(colors.length);

// Queue push/shift

var colors2 = new Array();
var count = colors2.push("red", "green");
colors2.push("black");

// shift remove and return the first item from the array

var item = colors2.shift();

console.log(item);

// unshift
// combining with pop, it is possible to emulate a queue

var colors3 = new Array();
var count = colors3.unshift("red", "green");
colors3.unshift("black");

var item = colors.pop();

console.log(item);