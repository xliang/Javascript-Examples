const spacetime = require('spacetime')
let d = spacetime.now('Europe/Paris')
console.log(d.dayName())
//'Wednesday'
d.isAsleep()