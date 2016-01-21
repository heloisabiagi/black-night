<?php

$to = "heloisa.biagi@gmail.com"; 
$subject = "You've got mail";
$headers = "From: Form Mailer";
$forward = 0;
$location = "";

$date = date ("l, F jS, Y"); 
$time = date ("h:i A"); 



$msg = "You've got mail at $date, $time.\n\n"; 

if ($_SERVER['REQUEST_METHOD'] == "POST") {
	foreach ($_POST as $key => $value) { 
		$msg .= ucfirst ($key) ." : ". $value . "\n"; 
	}
}
else {
	foreach ($_GET as $key => $value) { 
		$msg .= ucfirst ($key) ." : ". $value . "\n"; 
	}
}

mail($to, $subject, $msg, $headers); 

?>