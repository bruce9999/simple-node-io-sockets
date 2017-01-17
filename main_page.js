
//node stuff
var pathArray = window.location.href.split( '/' );
var host = pathArray[2];

//This gets run on page load and will open the socket with the node server
$.getScript("http://" + host + ":8080/socket.io/socket.io.js", function() {

  if (typeof io != 'undefined') {
   var socket = io.connect('http://' + host + ':8080');
   socket.once("connect", function() {
      console.log("connected");
    });
    //receive the data from the socket call and post to the web page
    socket.on('get_message', function(data) {
  
    var num = del_doc_array.length;
    
    var url = $('#truckgrid').jqGrid ('getCell', del_doc_array[i][1], 'called');
    var newUrl = url.replace('----', data.time);
    $('#truckgrid').jqGrid('setCell',  del_doc_array[i][1], 'actArrivalDisplay', newUrl, {'background-color':'green'});
    
        
     });

   }
});



