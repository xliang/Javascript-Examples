// -----------------------------
// Parasitic Constructor Pattern
// -----------------------------

// constructor function to create car objects
function Car(make, model, year) {
    var o = new Object();
    
    o.make   = make;
    o.model  = model;
    o.year   = year;
    o.sayCar = function() {
        alert('I have a ' + this.year + ' ' + this.make + ' ' + this.model + '.');
    };

    return o;
}


// create 2 car objects for John and Jane
var johnCar = new Car('Ford', 'F150', '2011'),
    janeCar = new Car('Audi', 'A4', '2007');

// call method on Jane's car
janeCar.sayCar();

/*

constructor creates a new object, initializes it with properties and
methods, and then returns the object. This is exactly the same as the factory pattern except that
the function is called as a constructor, using the new operator. When a constructor doesn’t return
a value, it returns the new object instance by default. Adding a return statement at the end of a
constructor allows you to override the value that is returned when the constructor is called.

JavaScript’s Parasitic Constructor Pattern is similar to the Factory Pattern 
in that a function is used to create and return a new object. 
They key difference is that a constructor function is used instead of a factory function.

In the example above, the constructor function explicitly returns the new o object. 
This overrides the default behavior, which in the absence of the explicit return o; statement, 
would implicitly return a new Car object.

The Parasitic Constructor Pattern is useful in situations where you want to abstract and encapsulate code in a safe way, as in the example below taken from Professional JavaScript for Web Developers.


*/

/*
	For example, you may want to create a special array that has an extra method. Since you don’t have
	direct access to the Array constructor, this pattern works:

*/

function SpecialArray() {

    // create the array
    var values = new Array();

    // add the values
    values.push.apply( values, arguments);

    // assign the method
    values.toPipedString = function() {
        return this.join(' |');
    };

    // return it
    return values;

}

// create a new [special] array for colors
var colors = new SpecialArray(' red', 'blue', 'green');

console.log(colors.toPipedString()); 

/*

It’s important to note that in the Parasitic Constructor Pattern, there is no relationship between the returned object and its constructor. Continuing with the SpecialArray example above, we see that:

alert(colors instanceof SpecialArray); // false

Bottom line, the Parasitic Constructor Pattern should not be used when other patterns suffice.


*/