// process.env.PORT and process.env.IP are for Cloud9
// substitute with your own port and (optionally) IP as required

var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}).listen(process.env.PORT, process.env.IP);
console.log('Server running!');