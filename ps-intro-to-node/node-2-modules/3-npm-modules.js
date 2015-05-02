// Be sure to run "npm install request" in this directory
// before running this script
var request = require('request');

request('http://www.pluralsight.com/', function(error, response, body) {
    if (!error && response.statusCode === 200) {
        console.log(body);
    }
});