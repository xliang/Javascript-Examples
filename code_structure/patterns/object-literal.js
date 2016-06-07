/*
	An Object Literal is a convenient way to create new objects. 
	The syntax looks very similar to what you might expect to see in JSON (JavaScript Object Notation), 
	but they are actually quite different.

	Pros

    Cleans up the global namespace by adding a namespace to your properties and methods
    You can add functionality to the object literal at a later point
    All the properties and methods are public

	Cons

    Uses the Object Literal syntax to define your properties and methods that some may find cumbersome
    There isn’t the ability to have private properties or methods

    It doesn't offer any privacy for properties or methods, but it is useful for 
    eliminating anonymous functions from your code, centralizing configuration options, and 
    easing the path to reuse and refactoring.
    
*/

var skillet = { 
  //public property 
  ingredient: "Bacon Strips",
 
  //public method
  fry: function() {
    console.log( 'Frying ' + this.ingredient );
  }
}; 
 
console.log( skillet.ingredient );  //Bacon Strips 
 
skillet.fry(); 
//Frying Bacon Strips
 
//Adding a public property to an Object Literal 
skillet.quantity = "12"; 
console.log( skillet.quantity ); //12
 
//Adding a public method to an Object Literal 
skillet.toString = function() { 
  console.log( this.quantity + " " + this.ingredient ); 
}; 
 
skillet.toString(); //12 Bacon Strips​
