// declare service
var express = require('express')
var app = express();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

http.listen(3000, function () {
    console.log('listening on *:3000');
});

// public path
const jsPath = '/public/js/';
const cssPath = '/public/css/';
const htmlPath = '/public/html/';

// routes
app.get('/', function (req, res) {
    res.sendFile(__dirname + htmlPath + 'index.html');
});
app.use(express.static('public')); // expose public resources

// socket.io
io.on('connection', function (socket) {
    // console.log('an user connected');
    socket.on('msg', function (msg) {
        console.log('msg: ' + msg);
        io.emit('msg', msg);
    });
});
