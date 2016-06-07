console.log("--- Object Literals ---"); 

// object literal only can create one object, it will have code duplication when creating more.

// This is an empty object initialized using the object literal notation

var myBooks = {};

// This is an object with 4 items, again using object literal
// just be aware there is no "new"

var mango = {
	color: "yellow",
	shape: "round",
	sweetness: 8,

	howSweetAmI: function () {
		console.log("Hmm Hmm Good");
	}
}

console.log(mango.color); 
console.log("if the property is not defined, it will return undefined. "); 

console.log(mango.protptype); // undefined

console.log("--- Change Property --- "); 

mango.color = 'Red'; 

console.log(mango.color); 

/*
	Object Literal vs Constructor
*/

/*

If you don't have behaviour associated with an object (i.e. if the object is just a container for data/state), I would use an object literal.

var data = {
    foo: 42,
    bar: 43
};

Apply the KISS principle. If you don't need anything beyond a simple container of data, go with a simple literal.

If you want to add behaviour to your object, you can go with a constructor and add methods to the object during construction or give your class a prototype.

*/

function MyData(foo, bar) {
    this.foo = foo;
    this.bar = bar;

    this.verify = function () {
        return this.foo === this.bar;
    };
}

// or:
MyData.prototype.verify = function () {
    return this.foo === this.bar;
};

/*
A class like this also acts like a schema for your data object: You now have some sort of contract (through the constructor) what properties the object initializes/contains. 
A free literal is just an amorphous blob of data.

*/