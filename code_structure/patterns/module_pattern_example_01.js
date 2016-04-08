var Module01 = (function (){
	var sayHelloPrivate = function (name) {
        console.log("Hello, " + name);
    };
    
    return {
        sayHello: function (name) {
            sayHelloPrivate(name);
        }
    };
}()); 

var Module2 = (function ( m1 ) {
    return {
        startThingsOff: function (name) {
            m1.sayHello(name);
        }
    };
}(Module01));

 Module2.startThingsOff('Liang');