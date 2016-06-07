// constructor function to create car objects
function Car(make, model, year) {
    this.make   = make;
    this.model  = model;
    this.year   = year;
}

// constructor prototype to share properties and methods
Car.prototype.sayCar = function() {
    alert('I have a ' + this.year + ' ' + this.make + ' ' + this.model + '.');    
};

// create 2 car objects for John and Jane
var johnCar = new Car('Ford', 'F150', '2011'),
    janeCar = new Car('Audi', 'A4', '2007');

// call method on Jane's car
janeCar.sayCar();

/*
	1. Solve the efficiency issue presented in Factory Pattern and Constructor Pattern 
	by utlizing prototypal inheritance. 

	2. it allows for unique (non-shared) instance properties to be created within a constructor function, 

	as well as shared properties and methods on the constructor function’s prototype.

	3. Note that the instance properties are now defi ned solely in the constructor, and the shared property
		constructor and the method sayName()  are defi ned on the prototype.

*/

// create prototype using object literal and create a explicit constructor 


function Car2(make, model, year) {
    this.make   = make;
    this.model  = model;
    this.year   = year;
}

// create constructor prototype with object literal
Car2.prototype = {
    constructor: Car,
    sayCar: function() {
        alert('I have a ' + this.year + ' ' + this.make + ' ' + this.model + '.');
    }
};

var johnCar2 = new Car2('Ford', 'F150', '2011');

console.log(johnCar2.constructor === Car2); 
console.log(johnCar2.constructor === Object); 
