function args () {
	return arguments; 
}

var arrayLike = args('a', 'b'); 
console.log(arrayLike[0]); 
console.log(arrayLike.length); 

// Paterns for working with array-like objects. 

// turn an array-liek object into an array
var arr = Array.prototype.slice.call(arguments); 
var copy = ['a', 'b'].slice(); 

// to iterate over all elements of an array-like object, 

function logArgs() {
	for(var i = 0; i < arguments.length; i++) {
		console.log(i + '. ' + arguments[i]); 
	}
}

function logArgs2(){
	Array.prototype.forEach.call(arguments, function (elem, i){
		console.log(i + '. ' + elem); 
	})
}

logArgs('hello', 'world'); 
logArgs2('hello', 'world'); 

