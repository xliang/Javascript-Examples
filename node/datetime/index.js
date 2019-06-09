/* version 4.3.0 will use current date time for iso date if date time missing in the string */
const spacetime = require('spacetime');
let data_value = '12/25/1996';
let iso_data = spacetime(data_value).format('iso');

console.log(iso_data);