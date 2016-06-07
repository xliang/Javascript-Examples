// OLOO - Object Linked to Other Objects
// Pattern by Kyle Simpson's book You Don't Know JS

/*
	What I argue OLOO offers is that it's much simpler to just express the objects 
	and directly link them, than to indirectly link them through the constructor/new mechanisms. 
    
    The latter pretends to be about classes but really is just a terrible syntax 
    for expressing delegation

*/

var Car = { // not a constructor
    init: function(make, model, year) {
        this.make   = make;
        this.model  = model;
        this.year   = year;        
    },
    sayCar: function() {
        alert('I have a ' + this.year + ' ' + this.make + ' ' + this.model + '.');    
    }
};


// create 2 car objects for John and Jane
// prototype linked to object
var johnCar = Object.create(Car),
    janeCar = Object.create(Car);

// call init method on John and Jane
johnCar.init('Ford', 'F150', '2011');
janeCar.init('Audi', 'A4', '2007');

// call method on Jane's car
janeCar.sayCar();