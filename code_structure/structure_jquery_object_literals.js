/*
    object literal (singleton)
    
    Is the simplest way to encapsulate related code. It doesn't offer any privacy for properties 
    or methods, but it's useful for eliminating anonymous function from your code, 
    centralizing configuration options, 
    easing the path to reuse and refactoring 

    1. simple to setup
    2. One instance per page
    3. All methods and properties are public
    4. May require initialization method

    Module 
    
    Overcomes some of the limiations of the object literal, offering privacy of variables
    and functions while exposing a public API if desired. 

    1. Function returns an object
    2. Self-initializing 
    3. Allow for private methods and properties
*/

$(document).ready(function(){

    var Engine = {

        ui : {

            helloWorld : function(){
                alert("Hello World");
            }, // helloWorld

            alertFun : function(phrase){
                /*
                I can even add comments here as well
                explaining what the heck this thing does
                */
                alert(phrase);
            }, // alertFun

        } // ui

    }; // Engine

    // invoke the function

    Engine.ui.helloWorld();
    Engine.ui.alertFun("I like cats");

});


// The module pattern

var feature = (function() {
 
    // Private variables and functions
    var privateThing = "secret";
    var publicThing = "not secret";
 
    var changePrivateThing = function() {
        privateThing = "super secret";
    };
 
    var sayPrivateThing = function() {
        console.log( privateThing );
        changePrivateThing();
    };
 
    // Public API
    return {
        publicThing: publicThing,
        sayPrivateThing: sayPrivateThing
    };
})();
 
feature.publicThing; // "not secret"
 
// Logs "secret" and changes the value of privateThing
feature.sayPrivateThing();

// Beware Anonymous Functions 

// Anonymous functions bound everywhere are a pain. 
// They're difficult to debug, maintain, test, or reuse. Instead, use an object literal to organize and name your handlers and callbacks.

// BAD
$( document ).ready(function() {
 
    $( "#magic" ).click(function( event ) {
        $( "#yayeffects" ).slideUp(function() {
            // ...
        });
    });
 
    $( "#happiness" ).load( url + " #unicorns", function() {
        // ...
    });
 
});
 
// BETTER
var PI = {
 
    onReady: function() {
        $( "#magic" ).click( PI.candyMtn );
        $( "#happiness" ).load( PI.url + " #unicorns", PI.unicornCb );
    },
 
    candyMtn: function( event ) {
        $( "#yayeffects" ).slideUp( PI.slideCb );
    },
 
    slideCb: function() { ... },
 
    unicornCb: function() { ... }
 
};
 
$( document ).ready( PI.onReady );