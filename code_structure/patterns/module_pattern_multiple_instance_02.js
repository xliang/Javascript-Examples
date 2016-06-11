/*
http://codereview.stackexchange.com/questions/7242/more-revealing-module-patter-in-javascript

There's nothing really wrong with variation 1, but there's also no point in putting things in pr. 
Sure you can chain it, but why chain something where this only refers to half the stuff you need (the private stuff)? You might as well just use function declarations. And you can get rid of PU, since it's kind of a meaningless variable name:


*/

var MyModule = (function(){
    function fetch(obj){}; // fetching data
    function build(obj){}; // building DOM of module
    function show(obj){};  // showing our object
    function hide(obj){};  // hiding our object
     //... Other private methods
     return {
         // Public methods
         init: function(){
             show(build(fetch(this)));
             return this; // for making chains
         },
         update: function(){}
         // ... other Public methods
     };
})();

/*

The problem with variation two is that you create those functions 
whenever the constructor is called (so, more than once).

The normal way to avoid this is to do something like

*/

var MyModule = (function(){

    function fetch(obj){}; // fetching data
    function build(obj){}; // building DOM of module
    function show(obj){};  // showing our object
    function hide(obj){};  // hiding our object

    function MyModule(){ 
        // constructor code
    };

    MyModule.prototype.init = function(){
        show(build(fetch(this)));
        return this;
    };  

    MyModule.prototype.update = function(){};
    //... other Public methods

    return MyModule;

}());

/*
This is not really a "module" anymore, by the way, 
just a normal constructor with some function properties attached to the prototype. 
But it looks like that's what you want, since you need multiple instances of it.

*/