// variant to pass name space and pass as parameter

(function (simpleguid) {

	// the code is here ... 

})(window.simpleguid = window.simpleguid || { }) 

// test whether the Module is already defined;  in case it is not, it initialize it to an empty object literal
// and assigne to the global object (window). In any case, the simpleguid parameter in the first line 
// of the IIFE will hold the Module's Namespace


// module pattern
(function(window, $, undefined){
  //do some work
})(window, jQuery);

// namespace

window.myApp = (function(myApp, $, undefined){
  //do some work
  return myApp;
})(window.myApp || {}, jQuery);

// revealing module pattern

/*
	returning an object which exposes the pieces of our module that 
	we are interested in making public, while allowing us to keep our private variables hidden. 
	The variable “myModule” is going to contain the two publicly exposed items, but as you can see, “someFunction” uses “myVar2”, but it is not externally accessible.

*/

var myModule = (function($, undefined){
  var myVar1 = '',
  myVar2 = '';
 
  var someFunction = function(){
    return myVar1 + " " + myVar2;
  };
 
  return {
    getMyVar1: function() { return myVar1; }, //myVar1 public getter
    setMyVar1: function(val) { myVar1 = val; }, //myVar1 public setter
    someFunction: someFunction //some function made public
  }
})(jQuery);

// comparing with Creating Constructors (Classess)

var Person = function(firstName, lastName, age){
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
}
 
Person.prototype.fullName = function(){
  return this.firstName + " " + this.lastName;
};

// inheritance 

var Spy = function(firstName, lastName, age){
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
};
Spy.prototype = new Person();
 
Spy.prototype.spy = function(){
  alert(this.fullName() + " is spying.");   
}
 
var mySpy = new Spy("Mr.", "Spy", 50);
mySpy.spy();