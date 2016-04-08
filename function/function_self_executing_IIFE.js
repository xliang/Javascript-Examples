/*

    One problem we constantly face in JavaScript is that everything defined in the global
    scope is available everywhere. Sometimes you don’t want to share with everyone and
    you don’t want third-party libraries to share their internal variables with you because
    it’s easy to step over each other’s libraries and cause difficult-to-diagnose problems.
    Using what we know about functions, we could wrap the entire program in a function,
    call that function, and then our variables wouldn’t be accessible to any external code.


   it is defined without being given a name or save to a variable and is executed immediately. 
   inside the funciton a new scope created, prevent private_variable from being access from global

 */


(function () {
    var private_variable = "private";
})();

var result = [];
for (var i=0; i < 5; i++) {
     result. push(function () { return i });  // (1)
}
console. log(result[1]()); // 5 (not 1)
console. log(result[3]()); // 5 (not 3)

console.log("==== using IIEF ===="); 

var result_2 = []; 
for (var i = 0; i < 5; i++) {
    (function (){
        var i2 = i; 
        result_2.push(i2); 
    }()); 
}

console. log(result_2[1]); 
console. log(result_2[3]); 

//outputs an error saying thevariable inundefined.
// console.log( private_variable );

/*
    Self-executing anonymous functions are used to contain variable scope and prevent variables 
    from leaking out into other places in the code. This can be used to create JavaScript plugins 
    that won’t conflict with application code because they don’t add any variables 
    to the global namespace. 
*/


// execute the function 


(function (what_to_eat) {
	var sentence = 'I am going to eat a ' + what_to_eat; 
	console.log (sentence); 
})('sandwitch'); // pass variable

// is same as 

var eatFunction = function(what_to_eat) {
	var sentence = 'I am going to eat a ' + what_to_eat;
	console.log (sentence); 
};

eatFunction('sandwitch'); 

/*
    Sample how to pass JQuery 

(function ($) {
	console.log($); 
})(jQuery);

*/

var prison = (function () {
    var prisoner_name = 'Mike Mikowski',
     jail_term = '20 year term';
    
    return {
        prisoner: prisoner_name + ' - ' + jail_term,
        sentence: jail_term
    };
})();

// this is undefined, no prisoner_name for you.
console.log( prison.prisoner_name );
// this outputs 'Mike Mikowski - 20 year term'
console.log( prison.prisoner );
// this outputs '20 year term'
console.log( prison.sentence );


var prison2 = (function () {
    var prisoner_name = 'Mike Mikowski',
        jail_term = '20 year term';
        return {
            prisoner: function () {
                return prisoner_name + ' - ' + jail_term;
        },
        setJailTerm: function ( term ) {
            jail_term = term;
        }
      };
})();
 // this outputs 'Mike Mikowski - 20 year term'
 console.log( prison2.prisoner() );
 
 prison2.setJailTerm( 'Sentence commuted' );
 // this now outputs 'Mike Mikowski - Sentence commuted'
 console.log( prison2.prisoner() ); 