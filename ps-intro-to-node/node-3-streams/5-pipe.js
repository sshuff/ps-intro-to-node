var request = require('request');

// Version 1:  Pipe HTML to standard out
var s = request('http://www.pluralsight.com/');

s.pipe(process.stdout);

// Version 2:  Chain request and pipe together
//request('http://www.pluralsight.com/').pipe(process.stdout);

// Version 3:  Pipe HTML to a file instead of standard out
//request('http://www.pluralsight.com/').pipe(fs.createWriteStream('pluralsight.html'));

// Version 4:  Pipe HTML through a gzip stream to a compressed file
//request('http://www.pluralsight.com/').pipe(zlib.createGzip()).pipe(fs.createWriteStream('pluralsight.html.gz'));