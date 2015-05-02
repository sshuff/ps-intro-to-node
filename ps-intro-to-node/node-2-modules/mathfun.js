// for use with 2-file-modules.js

var maxTime = 1000;

// If input is even, double it
// If input is odd, error
// (call takes random amount of time < 1s)
var evenDoubler = function(v, callback) {
    var waitTime = Math.floor(Math.random()*(maxTime+1));
    if (v%2) {
        setTimeout(function() {
            callback(new Error("Odd input"));
        }, waitTime);
    } else {
        setTimeout(function() {
            callback(null, v*2, waitTime);
        }, waitTime);
    }
};

module.exports.evenDoubler = evenDoubler;

module.exports.foo = "bar";