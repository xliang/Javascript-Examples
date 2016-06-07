// If you want to create multiple instances, 
// I suggest that you return a constructor function in your module:
var Slider = (function($){

    function slider(id){  // <- 'foo' is an example of a constructor argument 
                          // (1 and 12 below when the instances are created)

        this.id = id; // <- something specific for each instance
        // this.$reelWrap = ...
    }

    slider.prototype = {

        init: function(){
            this.pageLoad();
        },

        pageLoad: function(){
             console.log('pageLoad called from instance with id', this.id);
        },

        getId: function(){
            return this.id; // <- 'this' refers to the current instance
        }
    };

    return slider;

})(jQuery);

var slider1 = new Slider(1);
var slider2 = new Slider(12);

console.log(slider1.getId());