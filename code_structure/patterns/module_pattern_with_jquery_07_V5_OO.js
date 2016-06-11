var Vehicle = function(engine, speed){
    this.engine = engine;
    this.speed = speed || "786km/Hr";    
} 

Vehicle.prototype.engineInfo = function(){
    console.log("this vehicle has engine " + this.engine);
}

var Porsche = function(engine, speed, carName){                                       

    Vehicle.apply(this, arguments);   

// I stucked here and got answer 
// http://stackoverflow.com/questions/8605788/
// javascript-call-and-apply-functions-only-called-on-first-argument
// it means Vehicle functions arguments got copied here am I right :)

// J: The point is to call the 'base class' contructor with the arguments
// that you provide when you create a new Porsche as well.
// In other words, engine and speed will be set correctly in the 
// Vehicle constructor when you create a new Porsche()

    this.carName = carName;
}

Porsche.prototype = Object.create(Vehicle.prototype);
// Porsche.prototype = new Vehicle();
// http://stackoverflow.com/questions/4166616/
// understanding-the-difference-between-object-
// create-and-new-somefunction-in-j
// hmm need    more time to go into this :) 

// J: The difference is that if you just do Porsche.prototype = new Vehicle();
// The Vehicle constructor will be called even if you don't create an instance
// of Porsche

Porsche.prototype.constructor = Porsche;
// I stucked here and got http://stackoverflow.com/questions/9343193/
// why-set-prototypes-constructor-to-its-constructor-function

// J: I would say that it's good practice to do it, but I've personally never
// found any uses of that property.

Porsche.prototype.speedInfo = function(){
    console.log("this vehicle has speed " + this.speed);
}

var cayMan1 = new Porsche("Engine UV", "500km/hr", "CayMan");
var cayMan2 = new Porsche("Engine Ultra", "100km/hr", "911"); 

cayMan2.engineInfo();        
cayMan2.speedInfo();