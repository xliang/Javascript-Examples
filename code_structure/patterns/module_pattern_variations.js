// Anonymous Object Literal Pattern

var Module = (function () {

  var privateMethod = function () {};
  
  return {
    publicMethodOne: function () {
      // I can call `privateMethod()` you know...
    },
    publicMethodTwo: function () {

    },
    publicMethodThree: function () {

    }
  };

})();

// local scoped object literal 

var Module = (function () {

  // locally scoped Object
  var myObject = {};

  // declared with `var`, must be "private"
  var privateMethod = function () {};

  myObject.someMethod = function () {
    // take it away Mr. Public Method
  };
  
  return myObject;

})();

// Stacked locally scoped Object Literal
// This is pretty much identical as the previous example, but uses the “traditional” single Object Literal notation:

var Module = (function () {

  var privateMethod = function () {};

  var myObject = {
    someMethod:  function () {

    },
    anotherMethod:  function () {
      
    }
  };
  
  return myObject;

})()

// Revealing Module Pattern
// we reveal public pointers to methods inside the Module’s scope. 
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

// (augmentation) extending the module 
var ModuleTwo = (function (Module) {
    
    // access to `Module`
    
})(Module);

var ModuleTwo = (function (Module) {
    
    Module.extension = function () {
        // another method!
    };
    
    return Module;
    
})(Module || {});

// (augmentation) overwriting the module 

var EmployeeModule = (function (my) {
  my.add = function () {
    //override the  method.
  };
  return my;
}(EmployeeModule)); 

// (augmentation) creating additional module by using apply

var MyModule = (function() {

  this.version = '1.0';
  return this;

})();

var MyModule = (function() {

  this.getVersion = function() {
    return this.version;

  };

  return this;
}).apply(MyModule);

alert(MyModule.getVersion()); //alerts "1.0"
