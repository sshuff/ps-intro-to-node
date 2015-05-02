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

// Version 1:  Named function to process results:

// var processResults = function(err, results, time) {
//     if (err) {
//         console.log("ERROR: " + err.message);
//     } else {
//         console.log("The results are: " + results + " (" + time + " ms)");
//     }
// };

// evenDoubler(4, processResults);
// evenDoubler(5, processResults);


// Version 2:  Use anonymous function and track callbacks to print "Done!" message

var count = 0;

for (var i = 0; i<10; i++) {
    console.log("Calling evenDoubler for value: " + i);
    evenDoubler(i, function(err, results, time) {
        if (err) {
            console.log("ERROR: " + err.message);
        } else {
            console.log("The results are: " + results + " (" + time + " ms)");
        }
        if (++count === 10) {
            console.log("Done!");
        }
    });
};

console.log("-----");