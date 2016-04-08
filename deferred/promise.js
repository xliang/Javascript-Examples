// Promises

// The main idea behind is, rather than executing a call which may result in 
// blocking. We instead return a promise for a future value what will eventully 
// be satisfied. 

// error(callback)
// success (callback)
// then(success, error)

// All three methods take functions as arguments and invoke them based on the outcome of the promise
// The success callback funtion is passed the data retrieved from the server and the error callback 
// retrieves details of the problem that was encountered. 
// 
// Another way to think about the methods defined by a promise is that they are like events. 
