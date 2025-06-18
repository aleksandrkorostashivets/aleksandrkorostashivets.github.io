<?php

$recepient = "sevenstarlandscaping7@gmail.com";
$siteName = "SevenStars Interlocking";

$name = trim($_POST["name"]);
$email = trim($_POST["email"]);
$phone = trim($_POST["phone"]);
$comment = trim($_POST["message"]);
$message = "Full Name: $name \n E-mail: $email \n Phone number: $phone \n Message: $comment \n";

$pagetitle = "Please contact with client \"$siteName\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");

?>
