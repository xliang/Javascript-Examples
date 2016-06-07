// revealing module pattern

/*
Now there are issues with this pattern, especially in usage:

Pros

    It emulates private members. This would be an easy start for developers coming from Classical OOP.

    Since the members are directly attached in the module, or at least only one scope above in the closure, they are fast.

    No prototype chains to worry about.

Cons

    Creating multiple modules mean creating multiple objects, each with it's own scope and functions. One module's getName function is not the same as another module's getName(). Although perfectly fine (And that's how classical OOP works, as far as I know), it's bad for the browser since it uses too much memory.

    You can't use instanceof to determine the modules since they all are instances of the Object object, and they are all object literals ({}) to begin with.

*/

function createModule(name){

  //your private members, enclosed in createModule
  var privateVar = name;

  function privateFn(){
    console.log(privateVar);
  }

  //return a newly created object as the module
  return {
    //here, we have a function
    //since we live in the same scope as the privates, we can
    //also emulate getters and setters, classical OOP style
    getName : function(){
      privateFn();
    },
    setName : function(name){
      privateVar = name;
    }
  }
}

var newModule = createModule('mymodule');
newModule.getName(); //mymodule
newModule.setName('newname');
newModule.getName(); //newname

// Best Use 
// Single global modules, like libraries.

/*
	For spawning many modules, I suggest the native way of doing it, 
	and would be creating instances using constructors and prototypes.

*/

function Module(name){
  this.name = name;
}

createModule.prototype.getName = function(){
  console.log(this.name);
}

var newModule = new Module('mymodule');
newModule.getName(); //mymodule
newModule.name = 'newname';
newModule.getName(); //newname

/*
It has its own issues as well:

Pros

    Smaller memory footprint. Anything attached to the constructor's prototype is shared, not duplicated, across instances. This means one instance's getName is the same function as another instance's getName. This is because of the prototype chain (think of it as inheritance chain), where instances "inherit" the same object.

Cons

    No private scope
    A long prototype chain is a performance penalty, especially if the method lives far up the chain.
    Overkill for a single module. It was meant to spawn multiple instances.

*/

