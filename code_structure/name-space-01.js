
var your_namespace = your_namespace || {};

your_namespace.Foo = { toAlert: 'test'}; 

your_namespace.Bar = function (arg){
	console.log(arg); 
}

with(your_namespace){
	Bar(Foo.toAlert); 
}

// using closure
// ? There is an explanation of this approach in the Book "Speaking Javascript" at page 412 
// if anyone has it, under the heading "Quick and Dirty Modules"

var MYNS = MYNS || {};

MYNS.subns = (function() {
    var internalState = "Message";

    var privateMethod = function() {
        // Do private stuff, or build internal.
        return internalState;
    };
    var publicMethod = function() {
        return privateMethod() + " stuff";
    };

    return {
        someProperty: 'prop value',
        publicMethod: publicMethod
    };
})();
