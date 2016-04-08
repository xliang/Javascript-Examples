// Sample 1 (All private)

(function() { 
  //private variable 
  var ingredient = "Bacon Strips";
  
  //private function
  function fry() {
    console.log( 'Frying ' + ingredient );
  }
 
  fry();
}());
 
//Variables not accessible 
console.log( window.ingredient ); //Undefined
 
//Functions not accessible 
try { 
  window.fry(); //Throws Exception 
} catch( e ) { 
  //Object [object DOMWindow] has no method 'fry' 
  console.log( e.message ); 
}
 
//Can't add additional functionality

/*

The above code snippet wraps the ingredient variable and fry function with a Self-Executing Anonymous Function 
and right before the function ends it executes the fry method. 
After the Self-Executing Anonymous Function finishes executing there is no way to run the function again 
or reference any of the internals of the wrapped code.

Pros

    Hides all your implementation from external code
    The function runs once and only once
    The code inside doesn’t use the Object Literal notation

Cons

    All information is hidden, which may not be what you want
    Slightly more complicated technique, but not really


*/

// Sample 2 (Revealing Module Pattern (Public & Private))

//Revealing Module Pattern (Public & Private) 
var skillet = (function() { 
  
  var pub = {}, //Private 
      property amountOfGrease = "1 Cup";
 
  //Public property
  pub.ingredient = 'Bacon Strips';
 
  //Public method
  pub.fry = function() {
    console.log( 'Frying ' + pub.ingredient );
  };
 
  //Private method
  function privateWay() {
    //Do something...
  }
 
  //Return just the public parts
  return pub;
}());
 
//Public Properties 
console.log( skillet.ingredient ); //Bacon Strips
 
//Public Methods 
skillet.fry();
 
//Adding a public property to a Module 
skillet.quantity = 12; 
console.log( skillet.quantity ); //12
 
//Adding a public method to a Module 
skillet.toString = function() { 
  console.log( skillet.quantity + " " + skillet.ingredient + " & " + amountOfGrease + " of Grease" ); 
};
 
try { 
  //Would have been successful, 
  //but can't access private variable 
  skillet.toString(); 
} catch( e ) { 
  console.log( e.message ); 
  //amountOfGrease is not defined 
}

/*
	Inside of the Revealing Module Pattern we declared a pub object that will keep 
	all the public properties and methods that you want to be exposed. 
	At the end of the Module the pub object is returned, 
	which is what causes the them to be public outside of the Self-Executing Anonymous Function. 
	All the parts that were not added to the pub object remain private to the outside world; 
	however, the public methods that were exposed have access to the private parts 
	because of the Closure that was created.

Pros

    Allows for public and private properties and methods
    The Technique is Easy to understand
    The code inside doesn’t use the Object Literal notation

Cons

    Doesn’t allow for a way to add private properties to be used in new public methods

*/


// Sample 3 (Self-Executing Anonymous Function: Part 2 (Public & Private & Extend))

(function( skillet, $, undefined ) { 
  //Private Property 
  var isHot = true;
 
  //Public Property
  skillet.ingredient = 'Bacon Strips';
 
  //Public Method
  skillet.fry = function() {
    var oliveOil;
 
    addItem( 'tn Butter nt' );
    addItem( oliveOil );
    console.log( 'Frying ' + skillet.ingredient );
  };
 
  //Private Method
  function addItem( item ) {
    if ( item !== undefined ) {
        console.log( 'Adding ' + $.trim(item) );
    }
  }
 
}( window.skillet = window.skillet || {}, jQuery ));
 
//Public Properties 
console.log( skillet.ingredient ); //Bacon Strips
 
//Public Methods 
skillet.fry(); //Adding Butter & Fraying Bacon Strips
 
//Adding a Public Property 
skillet.quantity = "12"; 
console.log( skillet.quantity ); //12
 
//Adding New Functionality to the Skillet 
(function( skillet, $, undefined ) { 
  //Private Property 
  var amountOfGrease = "1 Cup";
 
  //Public Method
  skillet.toString = function() {
    console.log( skillet.quantity + ' ' +
                 skillet.ingredient + ' & ' +
                 amountOfGrease + ' of Grease' );
    console.log( isHot ? 'Hot' : 'Cold' );
  };
}( window.skillet = window.skillet || {}, jQuery ));
 
try { 
  //12 Bacon Strips & 1 Cup of Grease 
  skillet.toString(); //Throws Exception 
} catch( e ) { 
  console.log( e.message ); 
  //isHot is not defined 
}

/*

The first argument looks quite strange. What is window.skillet = window.skillet || {} doing? 
The code checks to see if skillet exists in the global namespace (window). 
If it does not exist, then window.skillet is assigned an empty object literal. 
Using this approach we can build a library across JavaScript files. 
If another script uses the same technique, then it will pass in the existing instance and append logic to it. 
Inside the Anonymous Function, if we want something to be public, then we append it to the skillet object. 
Any other properties or methods will be considered private.

The second argument passed in jQuery. The benefit of this is that the named parameter is referenced as $, 
which allows us to refer to jQuery as $ within the Anonymous Function without having to worry 
that it will conflict with the $ declared in other JavaScript libraries. 
This is a common practice that you will most likely run across when looking at well written jQuery code.

You might notice a 3rd parameter to the Anonymous Function called undefined. 
Why did we add that parameter and why didn’t we pass an argument to it? 
In JavaScript, you can unfortunately redefine what undefined means. 
Imagine that some code somewhere deep in one of your 3rd party libraries 
redefines undefined to something strange like true. If anywhere in your code you test against undefined, 
then you code will most likely not behave like you intended. In JavaScript, 
if you have a parameter that doesn’t have a matching argument, then it’s value is set as undefined. 
By using this trick, it can save us from the bad code someone wrote to redefine undefined.

Pros

    Gives you the ability to have public and private properties and methods
    The code inside doesn’t use the Object Literal notation
    Keeps undefined’s value as undefined in case someone overrode the value
    Allows you to use $ inside your code without worrying about clashing with other libraries
    Allows your library to grow across files using the “window.namespace = window.namespace || {}” technique
    A common pattern that you will see in many libraries, widgets, and plugins

Cons

    Slightly more complicated pattern, but not overly difficult to understand


*/



/*
	Here is their example showing 
	how to declare private & public properties and functions. 
	Everything is done as a self-executing anonymous function.

*/

(function( skillet, $, undefined ) {
    //Private Property
    var isHot = true;

    //Public Property
    skillet.ingredient = "Bacon Strips";

    //Public Method
    skillet.fry = function() {
        var oliveOil;

        addItem( "\t\n Butter \n\t" );
        addItem( oliveOil );
        console.log( "Frying " + skillet.ingredient );
    };

    //Private Method
    function addItem( item ) {
        if ( item !== undefined ) {
            console.log( "Adding " + $.trim(item) );
        }
    }
}( window.skillet = window.skillet || {}, jQuery ));

/*
	So if you want to access one of the public members you would just go skillet.fry() or skillet.ingredients.

*/

// Adding new Functionality to the skillet

(function( skillet, $, undefined ) {
    //Private Property
    var amountOfGrease = "1 Cup";

    //Public Method
    skillet.toString = function() {
        console.log( skillet.quantity + " " +
                     skillet.ingredient + " & " +
                     amountOfGrease + " of Grease" );
        console.log( isHot ? "Hot" : "Cold" );
    };
}( window.skillet = window.skillet || {}, jQuery ));

