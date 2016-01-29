<?php

$to = "heloisa.biagi@gmail.com"; 
$subject = "Results from your Contact Form";
$headers = "From: Black Night Form Mailer". "\r\n";
$headers .= "Reply-To: ". strip_tags($_POST['contact_email']) . "\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=UTF-8\r\n";

$date = date ("l, F jS, Y"); 
$time = date ("h:i A"); 


$msg = "<html>"; 
$msg .= "<body>";
$msg .= "<table border='0' cellspacing='0' cellpadding='0'>";

$msg .= "<tr>";
$msg .= "<td><font face='Arial' size='5' color='#202020'><b>Black Night Contact Form</b></font></td>"; 
$msg .= "</tr>"; 

$msg .= "<tr>";
$msg .= "<td><hr color='#202020' size='3'></td>"; 
$msg .= "</tr>";

$msg .= "<tr height='4'>";
$msg .= "<td></td>"; 
$msg .= "</tr>";  

$msg .= "<tr>";
$msg .= "<td>";
$msg .= "<table width='100%' border='0' cellspacing='0' cellpadding='0'>";

$msg .= "<tr>";
$msg .= "<td bgcolor='#FFF'><font face='Arial' size='2' color='#333333'><b>Name</b></font>"."<td><font face='Arial' size='2' color='#333333'>".$_POST['contact_name']."</font></td>"; 
$msg .= "</tr>";

$msg .= "<tr height='4'>";
$msg .= "<td></td><td></td>"; 
$msg .= "</tr>"; 

$msg .= "<tr>";
$msg .= "<td><hr color='#CCCCCC' size='1'></td><td><hr color='#CCCCCC' size='1'></td>"; 
$msg .= "</tr>"; 

$msg .= "<tr height='4'>";
$msg .= "<td></td><td></td>"; 
$msg .= "</tr>"; 

$msg .= "<tr>";
$msg .= "<td bgcolor='#FFF'><font face='Arial' size='2' color='#333333'><b>Email</b></font>"."<td><font face='Arial' size='2' color='#333333'>".$_POST['contact_email']."</font></td>"; 
$msg .= "</tr>";

$msg .= "<tr height='4'>";
$msg .= "<td></td><td></td>"; 
$msg .= "</tr>"; 

$msg .= "<tr>";
$msg .= "<td><hr color='#CCCCCC' size='1'></td><td><hr color='#CCCCCC' size='1'></td>"; 
$msg .= "</tr>"; 

$msg .= "<tr height='4'>";
$msg .= "<td></td><td></td>"; 
$msg .= "</tr>"; 

$msg .= "<tr>";
$msg .= "<td bgcolor='#FFF'><font face='Arial' size='2' color='#333333'><b>Message</b></font>"."<td><font face='Arial' size='2' color='#333333'>".$_POST['contact_message']."</font></td>"; 
$msg .= "</tr>";

$msg .= "</table>";
$msg .= "</td>";
$msg .= "</tr>";

$msg .= "</table>";
$msg .= "</body>";
$msg .= "</html>";

mail($to, $subject, $msg, $headers); 

?>