var http = require('http');

var options = {
    host: 'www.google.com',
    port: 80,
    path: '/',
    method: 'GET'
};

console.log("Going to make request...");

// Version 1:  http.request with string URL

var req = http.request('https://www.google.com/', function(response) {
    console.log(response.statusCode);
    response.pipe(process.stdout);
});

req.end();

// Version 2:  http.request with options object

// var req = http.request(options, function(response) {
//     console.log(response.statusCode);
//     response.pipe(process.stdout);
// });

// req.end();

// Version 3:  http.get()

// http.get('https://www.google.com/', function(response) {
//     console.log(response.statusCode);
//     response.pipe(process.stdout);
// });

// Version 4:  pluralsight.com, notice does not follow redirects

// http.get('https://www.pluralsight.com/', function(response) {
//     console.log(response.statusCode);
//     response.pipe(process.stdout);
// });