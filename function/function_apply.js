/*
	apply: func.apply(thisValue, argArray)

	this method uses the elements of argArray as arguments
	while calling the function func. 

	thisValue is the value that this has while executing func. 
*/

console.log(Math.max(17, 33, 2)); 
console.log(Math.max.apply(null, [17, 33, 2])); 