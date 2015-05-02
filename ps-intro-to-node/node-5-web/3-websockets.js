var http = require('http');
var socketio = require('socket.io');
var fs = require('fs');

var handler = function(req, res) {
    fs.readFile(__dirname + '/index.html', function(err, data) {
        if (err) {
            res.writeHead(500);
            return res.end('Error loading index.html');
        } else {
            res.writeHead(200);
            res.end(data);
        }
    });
};

var app = http.createServer(handler);
var io = socketio.listen(app);

// use this io.configure() for Cloud9 to skip websockets
io.configure(function () {
  io.set('transports', ['xhr-polling']);
});

io.sockets.on('connection', function (socket) {
  setInterval(function() {
    var timestamp = Date.now();
    console.log('Emitted: ' + timestamp);
    socket.emit('timer', timestamp);
  }, 2000);
  socket.on('submit', function(data) {
    console.log('Submitted: ' + data);
  });
});

// use process.env.PORT and process.env.IP for Cloud9
// or replace with your port and (optionally) IP as necessary
app.listen(process.env.PORT, process.env.IP);

console.log('Server running!');