/**
 * @name someFunction
 * @author kfb
 *
 * Basic usage:
 * var someFunction = new SomeFunction();
 * someFunction.init();
 *
 * additionally you can use methods like someFunction.methodName();
 *
 * Advanced usage:
 * var someFunction = new SomeFunction({
 *      "additionalOption": "thatCanOvervriteDefaults"
 * });
 */
function SomeFunction(opts) {
    var _cfg;
    var _root;

    //defining defaults and extending/overwriting it with inputted parameters
    this.config = $.extend({
        "someOption":       "some value"
    }, opts);

    /*
        INITIALIZE
    */
    this.init = function() {
        //assign _root and config variables
        _root = this;
        _cfg = this.config;

        //some code
    }
    /*
        Some Private Method (no "this")
        use var to keep the scope local
    */
    var _somePrivateMethod = function() {
        //some code
    }
    /*
        Some Method
    */
    this.someMethod = function() {
        //some code
    }
}

//declaration and auto initialization of someFunction
var someFunction = new SomeFunction();
someFunction.init();


// Update Version 

/**
 * @name someFunction
 * @author 
 *
 * Basic usage:
 * someFunction.init();
 *
 * additionally you can use methods like someFunction.methodName();
 */
var someFunction = new(function () {
    //assign _root and config private variables
    var _root = this;
    var _cfg = {
        "someOption": "some value"
    }

    /*
        INITIALIZE
    */
    this.init = function () {
        //some code
        _somePrivateMethod();
        _root.somePublicMethod();
    }
    /*
        Some Private Method (no "this")
    */
    var _somePrivateMethod = function () {
        //some code
        console.log("_somePrivateMethod");
    }
    /*
        Some Public Method
    */
    this.somePublicMethod = function () {
        //some code
        console.log("somePublicMethod");
    }

})();

//declaration and initialization of someFunction
someFunction.init();

//someFunction._somePrivateMethod();
//returns: TypeError: someFunction._somePrivateMethod is not a function

//someFunction.somePublicMethod();
//returns: "somePublicMethod"

// -------------------- multiple instances (constructor example) with auto init 

/**
 * @name someFunction
 * @author 
 *
 * Basic usage:
 * var someFunction = new SomeFunction();
 *
 * additionally you can use methods like someFunction.methodName();
 *
 * Advanced usage:
 * var someFunction = new SomeFunction({
 *      "additionalOption": "thatCanOvervriteDefaults"
 * });
 */
var SomeFunction = function () {
    //assign _root and config private variables
    var _root = this;
    var _cfg = {
        "someOption":       "some value"
    }

    /*
        INITIALIZE
    */
    this.init = function(opts) {
        _cfg = $.extend(_cfg, opts);
        //some code
        _somePrivateMethod();
        _root.somePublicMethod();
    }
    /*
        Some Private Method (no "this")
    */
    var _somePrivateMethod = function() {
        //some code
        console.log("_somePrivateMethod");
    }
    /*
        Some Public Method
    */
    this.somePublicMethod = function() {
        //some code
        console.log("somePublicMethod");
    }
    
    /*********************
     *   AUTO INITIALIZE
     **********************/
     this.init();
};

//declaration and initialization of someFunction
var someFunction = new SomeFunction();

var someFunction2 = new SomeFunction();

//someFunction._somePrivateMethod();
//returns: TypeError: someFunction._somePrivateMethod is not a function

//someFunction.somePublicMethod();
//returns: "somePublicMethod"


//------------------------------  multiple instance (constructor example) ------------------------//

/**
 * @name someFunction
 * @author 
 *
 * Basic usage:
 * var someFunction = new SomeFunction();
 * someFunction.init();
 *
 * additionally you can use methods like someFunction.methodName();
 *
 * Advanced usage:
 * var someFunction = new SomeFunction();
 * someFunction.init({
 *      "additionalOption": "thatCanOvervriteDefaults"
 * });
 */
var SomeFunction = function () {
    //assign _root and config private variables
    var _root = this;
    var _cfg = {
        "someOption":       "some value"
    }

    /*
        INITIALIZE
    */
    this.init = function(opts) {
        _cfg = $.extend(_cfg, opts);
        //some code
        _somePrivateMethod();
        _root.somePublicMethod();
    }
    /*
        Some Private Method (no "this")
    */
    var _somePrivateMethod = function() {
        //some code
        console.log("_somePrivateMethod");
    }
    /*
        Some Public Method
    */
    this.somePublicMethod = function() {
        //some code
        console.log("somePublicMethod");
    }

};

//declaration and initialization of someFunction
var someFunction = new SomeFunction();
someFunction.init();

var someFunction2 = new SomeFunction();
someFunction2.init();

//someFunction._somePrivateMethod();
//returns: TypeError: someFunction._somePrivateMethod is not a function

//someFunction.somePublicMethod();
//returns: "somePublicMethod"

//--------------------------  single instance, example with additional options -----------------------//

/**
 * @name someFunction
 * @author 
 *
 * Basic usage:
 * someFunction.init();
 *
 * additionally you can use methods like someFunction.methodName();
 *
 * Advanced usage:
 * someFunction.init({
 *      "additionalOption": "thatCanOvervriteDefaults"
 * });
 */
var someFunction = new (function () {
    //assign _root and config private variables
    var _root = this;
    var _cfg = {
        "someOption":       "some value"
    }

    /*
        INITIALIZE
    */
    this.init = function(opts) {
        _cfg = $.extend(_cfg, opts);
        //some code
        _somePrivateMethod();
        _root.somePublicMethod();
    }
    /*
        Some Private Method (no "this")
    */
    var _somePrivateMethod = function() {
        //some code
        console.log("_somePrivateMethod");
    }
    /*
        Some Public Method
    */
    this.somePublicMethod = function() {
        //some code
        console.log("somePublicMethod");
    }

})();

//declaration and initialization of someFunction
someFunction.init();

//someFunction._somePrivateMethod();
//returns: TypeError: someFunction._somePrivateMethod is not a function

//someFunction.somePublicMethod();
//returns: "somePublicMethod"


//----------------------- single instance, basic example ------------------------------//

/**
 * @name someFunction
 * @author 
 *
 * Basic usage:
 * someFunction.init();
 *
 * additionally you can use methods like someFunction.methodName();
 */
var someFunction = new(function () {
    //assign _root and config private variables
    var _root = this;
    var _cfg = {
        "someOption": "some value"
    }

    /*
        INITIALIZE
    */
    this.init = function () {
        //some code
        _somePrivateMethod();
        _root.somePublicMethod();
    }
    /*
        Some Private Method (no "this")
    */
    var _somePrivateMethod = function () {
        //some code
        console.log("_somePrivateMethod");
    }
    /*
        Some Public Method
    */
    this.somePublicMethod = function () {
        //some code
        console.log("somePublicMethod");
    }

})();

//declaration and initialization of someFunction
someFunction.init();

//someFunction._somePrivateMethod();
//returns: TypeError: someFunction._somePrivateMethod is not a function

//someFunction.somePublicMethod();
//returns: "somePublicMethod"