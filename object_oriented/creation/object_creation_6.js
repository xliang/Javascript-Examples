/*

You're using an immediately-invoked function expression (IIFE), like the Module pattern says you should, but for this case, you need to invoke your IIFE more than once. That involves giving it a name so that you can address it again, so technically it's not an IIFE anymore, but it works for the same reason that IIFEs do. I'm going to keep calling it

When you invoke a function, JavaScript creates a context for the variables and closures within it to live in. That context lives as long as anything outside the IIFE has a reference to anything inside it. That's why the traditional module pattern uses IIFEs: you can hide private data and functions within the IIFE's context.

But because you only invoke that function once, all of your module instances share the same context. You're storing your module options in the options variable, which is part of that share context instead of being part of the modules, so when you update the options in one of them, it updates the options in all of them. Sometimes, that's what you want, but not in your case.

What you want to do is create a new context for each module. This means you need to take your IIFE and keep a reference to it around, so that you can call it multiple times: in other words, it won't be an anonymous function anymore (or even necessarily an IIFE). But this is all doable. Here's one possible solution:


*/

var moduleContext = function () {
    // default options
    var options = {
        first: "test",
        second: "test2",
        third: "test3"
    };
    // take in useroptions and replace default options
    var module = function(userOptions) {
        if (userOptions != null && userOptions != undefined
            && userOptions != 'undefined') {
            for (var opt in options) {
                if (userOptions.hasOwnProperty(opt)) {
                    options[ opt ] = userOptions[ opt ];
                }
            }
        }
    };

    //prototype
    module.prototype = {
        init: module,
        options: options
    };

    return module;

};

var my_module3 = new (moduleContext())();
my_module3.init({
    first: "Mike",
    second: "Lisa",
    third: "Mary"
});
var my_module2 = new (moduleContext())();
my_module2.init({
    first: "Barry",
    second: "Larry",
    third: "Sam"
});
console.log(my_module2.options, my_module3.options);

/*

The magic happens in those two new (moduleContext())() lines. The moduleContext() function, like your IIFE, sets up a context for the module constructor function, and then returns it. The new operator then works on the function that gets returned, and calls it with no arguments (the last set of parens). The extra parens around the call to moduleContext() are needed for the same reason they're needed on an IIFE: they resolve some ambiguities in the JavaScript parser.

Now, your two modules get created in two different contexts. Because of that, you can set the "common" options object in either module (like you currently do), but only the options object in that module's context will be affected. The other one doesn't get touched, so you can set your options separately.


*/