// For use with both 1-assert.js and 2-mocha.js

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

var evenDoublerSync = function(v) {
    if (v%2) {
        throw(new Error("Odd input"));
    } else {
        return(v*2);
    }
};

module.exports.evenDoubler = evenDoubler;
module.exports.evenDoublerSync = evenDoublerSync;

module.exports.foo = "bar";