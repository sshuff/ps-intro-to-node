var b = new Buffer('Hello');

console.log(b.toString());

console.log(b.toString('base64'));

var v = new Buffer('World').toString('base64');

console.log(b.toString('utf-8',0,2));