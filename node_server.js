//This file is used to start the node.js server on the main web server to open the socket
//The server must have node.js installed
var app = require('http').createServer()
  , io = require('socket.io').listen(app)
  , fs = require('fs')

// Start an HTTP server on port 8080
app.listen(8080);


io.sockets.on(

    'connection',
    function (socket) {
        socket.on(
            'set time', 
            // callbackfn is the sender's callback function
            // and when called with an argument
            // it will be executed by the sender with that argument
            // and it will not be actually executed here
            function (data, callbackfn) {
                var response = data;
                callbackfn(response);
                socket.broadcast.emit('get_message', response);
            }
        );
    }
);



