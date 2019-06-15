/**
 * Created by Owner on 6/19/2014.
 */

var uri = "http://www.wrox.com/illegal value.htm#start";

// encode the empty space
console.log(encodeURI(uri));

// encode everything
console.log(encodeURIComponent(uri));



eval("console.log('hello')");