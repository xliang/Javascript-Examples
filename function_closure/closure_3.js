/*
    closure is the scope created when a function is declared that allows the funciton to access 
    and manipulate variables that are external to that function. 

    1. innerfunction eventually execute, even if it's executed after the scope in which it was declared go away. 
       it creates a "safety bubble" of the function and the variables that are in scope at the point of funciton's
       declaration, the funciton has all it will need to execute. 

    2. function parameters are included in the closure of that function. 
    3. All variables in the outer scope, even those declared after the function declaration, are included. 
    4. Within the same scope, variables not yet defined cannot be forward-referenced. 

    Without closures, doing multiple things at once, whether event handling, animations, or even Ajax requests, would be incredibly difficult. If you’ve been waiting for a
    reason to care about closures, this is it!

*/


function Shape(color, borderThickness) {
    // Closure
    // describeCount is visiable after contructor function has returned 

    var describeCount = 0;

    this.color = color;
    this.borderThickness = borderThickness;
    
    this.describe = function() {
        console.log("I am a " + this.color + " shape, with a border that is " +
            this.borderThickness + " thick - ", describeCount++);
    }
}

var shape1 = new Shape('red', 2); 
var shape2 = new Shape('blue', 5); 

// even the constructor function is out of scope, the "describeCount" variable is bound to closure
// created by the delcaration of "decribe" funciton, is available to that method. 

shape1.describe(); 
shape1.describe(); 
shape1.describe(); 

shape2.describe(); 

function ClosuredShape(color, borderThickness) {
    var describeCount = 0,
        self = this;

    this.color = color;
    this.borderThickness = borderThickness;
    
    this.describe = function() {
        console.log("I am a " + self.color + " shape, with a border that is " +
            self.borderThickness + " thick. I have told you this " + describeCount++ + " times.");
    }
}

var shape3 = new ClosuredShape('green', 4);
var shape4 = new ClosuredShape('black', 5); 

shape3.describe(); 
shape3.describe(); 

shape4.describe(); 


function PrototypeShape(color, borderThickness) { 
    this.color = color;
    this.borderThickness = borderThickness;
    this._describeCount = 1;
}

PrototypeShape.prototype.describe = function() {
    console.log("I am a " + this.color + " shape, with a border that is " +
        this.borderThickness + " thick. I have told you this " + this._describeCount++ + " times.");
};

var shape5 = new PrototypeShape('brown', 10); 
var shape6 = new PrototypeShape('pink', 11); 

shape5.describe(); 
shape6.describe(); 

shape5.describe(); 
