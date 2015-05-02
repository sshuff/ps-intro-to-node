// for use by 3-child-fork.js

var fun = require('./mathfun');

process.on('message', function(m) {
    if (m.cmd === 'double') {
        console.log('hs: I was asked to double ' + m.number);
        fun.evenDoubler(m.number, function(err, result) {
            process.send({answer: result});
        });
    } else if (m.cmd === 'done') {
        process.exit();
    }
});