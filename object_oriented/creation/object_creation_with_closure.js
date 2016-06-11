// a plain function. I prefer downcase because only true
// Javascript classes should be uppercase (like Date or Math)
// and this isn't a class, it's a factory
function thing() {
    // The first thing in the function is a bunch of scoped
    // variables. One of these scoped variables is always an empty
    // object to which you'll assign properties and methods
    // before it goes out the door as the value this function
    // returns.

    // This is that object. It could also be named 'thing'
    // but that would be shadowing the function 'thing'
    // and that's not a good thing to do.
    var t = {},
        // Now any variables that represent the state and data
        // of this object, thing. These are not attached to
        // the t object, they're attached to the scope it can
        // access - the scope of this thing() function.
        count = 0;

    // You can also create functions here that are scoped
    // and use them as callbacks, and they'll have access to
    // this t object's scoped variables.
    //
    // Functions that aren't attached to t are just like
    // the scoped variables above - they aren't accessible to
    // the API user. This is kind of like the private keyword
    // elsewhere
    function handler() {
        count++;
    }

    // Now you make the decision of the set of methods on t.
    // These have access to all of the scoped variables as well.
    t.talk = function(x) {
        alert(x);
    };

    // Finally, when you're done with t, return it.
    return t;

    // In terms of the idea of a 'closure', this is how you
    // 'close over' the scope of the object. Someone who calls
    // thing() gets a copy of t to play around with, but that
    // t will always refer to the scoped variables we just
    // defined.
}