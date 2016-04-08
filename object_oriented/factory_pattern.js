console.log("--- Factory Pattern --- ");

function createPerson(name, age, job) {
    var o = new Object();
    o.name = name;
    o.age = age;
    o.job = job;
    o.sayName = function () {
        console.log(this.name);
    };

    // return itself. 
    return o;
};


var person1 = createPerson("Nicholas", 29, "Software Engineer");
var person2 = createPerson("Greg", 27, "Doctor");

person1.sayName();
person2.sayName();

/*

JavaScript’s Factory Pattern employs a factory function to create new objects. It was conceived as a DRY means to abstract the process of creating objects. However, there are couple problems with it:

    Efficiency — Methods created on the factory function are copied to all new object instances. 
    This is inefficient.
    
    Type Determination — Because the factory function returns a new object, 
    it makes type determination of object instances difficult. New object instances are typed as “Object”, with no indication of the instances’ context.


*/

console.log("--- Factory Pattern with prototype ---"); 

var proto = {
    sentence : 4,
    probation : 2
}

var makePrisoner = function (name, id) {
    var prisoner = Object.create(proto); 
    prisoner.name = name; 
    prisoner.id = id; 

    return prisoner; 
}

var firstPrisoner = makePrisoner('Joe', '12A'); 
var secondPrisoner = makePrisoner('Sam', '2BC'); 

