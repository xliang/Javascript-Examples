/*

Prototype Pattern
This is an inheritance pattern. Every JavaScript function gets property called prototype. When we call a JavaScript constructor to create an object, all the properties and methods of the constructor's prototype are then made available to the new object. Using this pattern you inherit both own properties and prototype properties and methods.

Pros: 

    Functions are loaded only once into memory
    You can ‘override’ functions through prototyping

Cons:

    Constructor separate from prototype definition

*/

var Car = function(engine) {
 this.engine = engine;
};

// We are adding the functions start and stop to the object prototype. 
// Therefore, they will be shared between all of the Car objects.
Car.prototype = {
 start: function() {
 alert('Started ' + this.engine);
 }
 stop: function() {
 alert('Stopped ' + this.engine);
 }
};

// Usage example:
var car = new Car('V9');
car.start();
car.stop();

/*

Revealing Module Pattern
It provides a way of wrapping a mix of public and private methods and variables, protecting pieces from leaking into the global scope and accidentally colliding with another developer's interface. With this pattern, only a public API/Interface is returned, keeping everything else within the closure private. It is implemented as self-invoking function to which global objects can be passed as arguments. This effectively allows us to import them and locally alias them as we wish.

Pros: 

    Expose only public members
    Singleton implementation – through immediate invoke functions

Cos:

    Functions are duplicated across objects in memory
    Not easy to extend and debug


*/

// Global module
var car = function (eng) {
        // private
 var engine = eng,
 start = function() {
 alert('started ' + engine);
 },
 stop = function() {
 alert('stopped ' + engine);
 };
 // public API/interface
 return {
 start: start,
 stop: stop
 };
}('V8');

// Usage: 
car.start();
car.stop();

/*

Revealing Prototype Pattern
It is a combination between Prototype and Reveling Module patterns. In the prototype property anonymous function there are returned only the public functions.

Pros:

    expose only public members
    functions loaded into memory only once
    extensible – you can ‘override’ functions prototype functions


*/

var Car = function(eng) {
    this.engine = eng;
}

Car.prototype = function() {
    // private
    var start = function() {
     alert(‘started ‘+this.engine);
    },
    stop = function() {
 alert(‘stopped ‘+ this.engine);
    };
    // public API / interface
    return {
     start: start,
     stop: stop
    };
}();
	

