console.log("--- Prototype Pattern for Creating Objects ---"); 

// create an Object with properties and methods 

function Fruit () {

}

// properties 
Fruit.prototype.color = "Yellow";
Fruit.prototype.sweetness = 7;
Fruit.prototype.fruitName = "Generic Fruit";
Fruit.prototype.nativeToLand = "USA";

// methods
Fruit.prototype.showName = function () {
    console.log("This is a " + this.fruitName);
}; 

Fruit.prototype.nativeTo = function () {
    console.log("Grown in:" + this.nativeToLand);
}; 

var mangoFruit = new Fruit ();
mangoFruit.showName(); //
mangoFruit.nativeTo();

console.log("--- test instance property shadow prototype property ---"); 

function PropertyPerson () {

}

PropertyPerson.prototype.name = "Nick"; 
PropertyPerson.prototype.age = 26; 
PropertyPerson.prototype.sayName = function () {
    console.log(this.name); 
}

var proPerson1 = new PropertyPerson();

// "shadow" the property on the the instance with the same name 
// use delete method to remove it 

// prototype is !! immutable !! 

proPerson1.name = "greg"; 

var proPerson2 = new PropertyPerson(); 

proPerson1.sayName(); 
proPerson2.sayName(); 

// instance has name property
console.log (proPerson1.hasOwnProperty("name"));

// instance does not have the name property
console.log(proPerson2.hasOwnProperty("name")); 

console.log ("--- It raises error when creating  property after instance ---"); 

function PropertyPersonWithError(){

}

var friend = new PropertyPersonWithError();

PropertyPersonWithError.prototype = {
     constructor: PropertyPersonWithError,
     name : "Nicholas",
     age : 29,
     job : "Software Engineer",
     sayName : function () {
        console.log(this.name);
     }
};

try
{
    friend.sayName(); //
}
catch (err)
{
    console.log(err.message); 
}