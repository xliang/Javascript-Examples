//The module pattern overcomes some of the limitations of the object literal, 
// offering privacy for variables and functions while exposing a public API if desired.

// it is a anonymous function, execute immediately. All of the code run inside of the function 
// lives in a closure, which provides privacy and state throughout the life time of the application. 


(function () {

	//create variable
  //var name = "rupesh";
  
  //create method
  //var sayName = function ( ) {
  //    alert(name);
  //};

}()); //calling this method. 

// passing global as parameters to the functions 

(function ($, YAHOO) {

}(jQuery, YAHOO)); 


// add private variables 

//Single Global Variable "Module", exposed to the document

var Module = ( function ( ) {

	// private ... 
    var privateVariable = "some priviate value",
        privateMethod = function ( ) {
			//do something.
	};
    
    //returning one anonymous object literal that would expose privileged methods.
    return {

         //the method inside the return object are 
         //called as privileged method because it has access 
         //to the private methods and variables of the module.

         privilegedMethod : function ( ) {

            //this method can access its private variable and method 
            //by using the principle of closure.  

            console.log("outputting " + privateVariable); //accessing private variable.
            privateMethod( ); //calling private method
        }
    };
})( ); 

console.log(Module.privilegedMethod());

// Extending Module pattern

var Module1 = ( function (oldModule) {
    var 
	     //assigning oldmodule in to a local variable.
	     parent = oldModule;
	
        //overriding the existing privileged method.
        parent.privilegedMethod = function ( ){
         //do something different by overriding the old method.
    };
	
    //private method accessing privileged method of parent module.
    var privateMethod2 = function ( ) {
        parent.privilegedMethod();//can access privileged method of Module
        parent.publicMethod1(); //can access public method of Module
    }
    return {
        newMethod : function ( ) {
          ///do something for this brand new module.
          ///use some functionality of parent module.
          /// parent.privilegedMethod( );
        }
    };
} )(Module);//Module object is the existing module that I want to extend. 


// object literal bolt the private methods on it. 
// Module pattern can define private stuff locally, and only return the "Good Part"

var feature = (function() {

	var privateThing = "secret"; 
	var publicThing = "not secret"; 

	var changePrivateThing = function() {
		privateThing = "super secret"; 
	}; 

	var sayPrivateThing = function() {
		console.log(privateThing); 
		changePrivateThing(); 
	}

	return {
		publicThing : publicThing,
		sayPrivateThing: sayPrivateThing
	}; 


})(); 

console.log(feature.publicThing); 
console.log(feature.sayPrivateThing()); 

var prison = (function () {

	var prisoner_name = 'Mike Mikowski',
	jail_term = '20 year term';

	return {
		prisoner: prisoner_name + '- ' + jail_term,
		sentence: jail_term
	};
})();

// this isundefined, no prisoner_name for you.
// console.log( prison.prisoner_name );

// this outputs 'Mike Mikowski- 20 year term'
console.log( prison.prisoner );
// this outputs '20year term'
console.log( prison.sentence ); 

// Master module pattern 

// 1. anonymous object literal return 
var Module = (function() {

	var privateMethod = function () {
		// do something 
	}; 

	return {
		publicMethod: function() {
			// code; 
		}
	}; 

})(); // Immediate-invoked-Function-Expression  
      // create new scope and creates "privacy"
      // To return only the parts we needs, leaving 
      // the other code out of the global scope. 

// 2. locally scoped object literal
var Module = (function () {

  // locally scoped Object
  var myObject = {};

  // declared with `var`, must be "private"
  var privateMethod = function () {};

  myObject.someMethod = function () {
    // take it away Mr. Public Method
  };
  
  return myObject; // only the object send back, not the name

})();

// 3. Revealing Pattern
// we reveal public pointers to methods inside 
// the Module's scope. 
// This again, can create a really nice code management system in which you can clearly see and define which methods are shipped back to the Module:

var Module = (function () {

  var privateMethod = function () {
    // private
  };

  var someMethod = function () {
    // public
  };

  var anotherMethod = function () {
    // public
  };
  
  return {
    someMethod: someMethod,
    anotherMethod: anotherMethod
  };

})();

