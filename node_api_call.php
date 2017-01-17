
<?php 
//This is what is called whenever an update needs to be pushed to the web page.

$time = $_REQUEST['time'];
$del_doc_num = $_REQUEST['del_doc_num'];
$started = $_REQUEST['started'];

$path = getcwd()."/request_page_update_node.js";
$command = "/usr/bin/node $path $del_doc_num '$time' $started";

//echo $command;
$return = exec($command, $output, $retval);


?>