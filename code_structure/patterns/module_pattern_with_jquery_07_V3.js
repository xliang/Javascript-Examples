var BaseSlider = (function(){

    function baseSlider(id){ 
        this.id = id;
        console.log('base constructor called with parameters:', arguments);
    }

    baseSlider.prototype.init = function(){ // a method that you want in all your types (sliders)
        console.log('init called from base object');
    };

    return baseSlider;

})();

var SomeOtherSlider = (function(){

    function someOtherSlider(id){ 
        BaseSlider.apply(this, arguments); // call the base objects constructor
    }
    
    someOtherSlider.prototype = Object.create(BaseSlider.prototype); // inherit from the base object prototype
    someOtherSlider.prototype.constructor = someOtherSlider;
    
    someOtherSlider.prototype.doSomething = function(){ // some method specific for this type
        console.log('doSomething called', this.id);
    };

    return someOtherSlider;

})();

var someSlider = new SomeOtherSlider(1);

someSlider.init();
someSlider.doSomething();