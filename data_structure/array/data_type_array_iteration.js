/**
 * Created by Owner on 6/18/2014.
 */

var items = [1, 2, 3, 4, 5, 4, 3, 2, 1];
var everyResult = items.every(function(item, index, array){
    return (item > 2);
});

console.log(everyResult);

var someResult = items.some(function(item, index, array){
    return (item > 2);
});

console.log(someResult);

var filterResult = items.filter(function(item, index, array){
    return (item > 2);
});

console.log(filterResult);

var mapResult = items.map(function(item, index, array){
    return (item * 2);
});

console.log(mapResult);

var values = [1,2,3,4,5];
var sum = values.reduce(function(prev, cur, index, array){
    return prev + cur;
});

var sum2 = values.reduceRight(function(prev, cur, index, array){
    return prev + cur;
});

console.log(sum); //15
console.log(sum2); //15