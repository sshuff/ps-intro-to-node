// Load mathfun.js from same directory
var mathfun = require('./mathfun');

var processResults = function(err, results, time) {
    if (err) {
        console.log("ERROR: " + err.message);
    } else {
        console.log("The results are: " + results + " (" + time + " ms)");
    }
};

for (var i = 0; i<10; i++) {
    console.log("Calling 'evenDoubler' with paramter '" + i + "'");
    mathfun.evenDoubler(i, processResults);
}
console.log("-----");

console.log("The 'foo' variable from module 'mathfun' = " + mathfun.foo);

// Should return undefined, since maxTime is not exported
console.log("The 'maxtime' variable is not exported: " + mathfun.maxTime);