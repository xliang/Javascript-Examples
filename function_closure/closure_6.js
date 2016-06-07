function Constructor(name) {
    var privateProperty = name;
    var privateMethod = function() {
        console.log('called from public method');
    };
    return {
        name: name,
        publicProperty: 'im public',
        publicMethod: function() {
            console.log('called from public method');
        },
        getter: privateMethod
    };
}

var myObj1 = new Constructor('a');
var myObj2 = Constructor('b');

console.log(myObj1);
console.log(myObj2);