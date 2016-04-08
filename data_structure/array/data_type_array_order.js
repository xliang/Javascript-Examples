/**
 * Created by Owner on 6/17/2014.
 */

var values = [1, 2, 3, 4, 5];
values.reverse();
console.log(values);

var values = [0, 1, 5, 10, 15];
values.sort();
console.log(values);

function compare(value1, value2){
    if (value1 < value2){
        return 1;
    } else if (value1 > value2) {
        return -1;
    } else {
        return 0;
    }
}

values.sort(compare);
console.log(values);
