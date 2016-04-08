/**
 * Created by Owner on 6/18/2014.
 */

var colors = ["red", "green", "blue"];
var colors2 = colors.concat("yellow", ["black", "brown"]);

console.log(colors);
console.log(colors2);

var colors4 = ["red", "green", "blue", "yellow", "purple"];
var colors5 = colors4.slice(1);
var colors6 = colors4.slice(1,4); // between the items, not including the end position

console.log(colors5);
console.log(colors6);

// splice
// insert the items in the middle of the array

// delete
// splice (0, 2) -- delete first two

// insert
// splice (2, 0, "red", "green");

// replacement
// splice (2, 1, "red", "green") -- delete one item at position 2 and add two 