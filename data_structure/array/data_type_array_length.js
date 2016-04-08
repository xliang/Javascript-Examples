/**
 * Created by Owner on 6/17/2014.
 */

// array's length is not readonly

// remove a item
var colors = ["read", "blue", "green"];

console.log(colors[2]);

// remove item form array
colors.length = 2
console.log(colors[2]);

// increase items
colors.length = 4;
console.log(colors[2]);

// add items
var colors2 = ["read", "blue", "green"];
colors2[colors2.length] = "brown";
colors2[colors2.length] = "black";

console.log(colors2[4]);

