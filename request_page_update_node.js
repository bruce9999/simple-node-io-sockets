var io = require('socket.io-client');
var socket = io.connect("http://localhost:8080");
socket.once("connect", function() {
	console.log("connected");

});

socket.on('get_message', function(data) {
	console.log(data);
});
var displayTime = '';
var del_doc_num = '';
var started = '';
//this is where the actual call to the socket it made, passing info from the API call (starting with index==2)
process.argv.forEach(function(val, index, array) {
	if (index == 2) del_doc_num = val;
	if (index == 3)	displayTime = val;
	if (index == 4) started = val;
});

var info = {};
info.time = displayTime;
info.del_doc_num = del_doc_num;
info.started = started;

socket.emit('set time', info,

// This function will be called when server receives
// this event, and the response argument will be defined
// by the server
function(response) {
	// we could do other things with the response, but we'll just disconnect
	// here
	console.log(response);
	socket.disconnect();
});