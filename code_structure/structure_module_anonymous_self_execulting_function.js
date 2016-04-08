(function(){ // open IIFE
    var tmp = "abc"; // not a global variable

}()); // close IIFE


(function ($, MyObject, undefined) {
  MyObject.publicFunction = function() {
      console.log("This is a public function!");
  };
  var privateFunction = function() {
    console.log("This is a private function!");
  };
  
  MyObject.sayStuff = function() {
    this.publicFunction();
    privateFunction();
    privateNumber++;
    console.log(privateNumber);
  };
  var privateNumber = 0;
}(jQuery, window.MyObject = window.MyObject || {}));

MyObject.sayStuff();
MyObject.sayStuff();
MyObject.publicFunction();
MyObject.privateFunction(); // Returns error
privateFunction(); // Returns error

/*

MyObject here is your namespace. As you can see, 
this way I can have private and public attributes in my namespace, which can come in handy.

Let me also explain other things. 
If you want to make your code as accessible and reusable as possible, 
you need to get rid of assumptions. 
If you need jQuery, that's fine, but don't assume that you can access is using $. 
That's why it's better to pass jQuery, and then assign it to $ in your scope. 

Secondly, you don't want to overwrite your namespace - that's why we use window.MyObject = window.MyObject || {},
which will return MyObject if it already exists, so we can expand it - see the huge advantage here? 

Finally we have undefined. You may wonder why the heck do we need to put it there? 
Well, in older versions of ECMAScript you were able to redefine undefined. 
If provide our function with two parameters, and we define the third one as undefined, 
we will be absolutely sure that undefined is, well, undefined.


*/