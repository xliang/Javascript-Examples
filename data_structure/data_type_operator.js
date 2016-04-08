/**
 * Created by Owner on 6/10/2014.
 */

console.log("---Unary Operators---");

var num1 = 2;
var num2 = 20;
var num3 = num1-- + num2;
var num4 = num1 + num2;

console.log(num3);
console.log(num4);

var s1 = "2";
var s2 = "z";
var b = false;
var f = 1.1;
var o = {
    valueOf: function() {
        return -1;
    }
}

console.log(s1++);
console.log(s2++);
console.log(b++);
console.log(f--);
console.log(o--);

console.log("---Boolean Operators---");

var car = {
    name: "Ford"
};

// Boolean(car) return true;

// convert to boolean first
console.log(!car);
console.log(!"");
console.log(!"blue");
console.log(!null);
console.log(!NaN);

// !! -> Boolean()

// Logic AND
// AND can be used with any type, not just Boolean value
// AND is short-circuited operation

// Logic OR
// OR is short-circuited operation

