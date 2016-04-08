console.log("==== String output ===="); 

console.log("Character Literals");

console.log("\"You are at a Justin Bieber concert,\nand you hear this lyric \'Lace my shoes\noff, start racing.\'\"");

console.log('He said, \'hey.\'');
console.log("He said, \"hey.\"");

console.log("JohnSmith.length: ");
console.log("JohnSmith".length);

console.log("==== ToString Function ===="); 

var myData1 = (5).toString() + String(5);

var myData2 = (5).toString(2); // binary
var myData3 = (5).toString(8); // octal
var myData4 = (5).toString(16); // hexadecimal
var myData5 = (5.6).toFixed(2); // return n digits
var myData6 = (5.66).toExponential(2); 
var myData7 = (5.66667).toPrecision(3);  

console.log("Result: " + myData1); 
console.log("Result: " + myData2);
console.log("Result: " + myData3); 
console.log("Result: " + myData4); 
console.log("Result: " + myData5); 
console.log("Result: " + myData6); 
console.log("Result: " + myData7);

console.log("ToString() using null and undefined");
console.log(null);

var undefined_value;
console.log(undefined_value);

console.log("ToString() using boolean. ");
console.log(true);

console.log("==== SubString Function ====");
console.log("Wonderful day".substring(3, 7));
console.log("Hamburgers".substring(3, 4));

console.log("==== Slice Function ====");

console.log("abc".slice(1)); 
console.log("abc".slice(1, 2));

console.log("==== Index Function ====");

console.log("abc".indexOf("b"));

console.log("==== toUpperCase Function ====");

console.log("tom".toUpperCase()); 