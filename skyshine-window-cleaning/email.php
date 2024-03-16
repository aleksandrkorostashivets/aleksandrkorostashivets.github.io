<?php

$recepient = "Please type email address";
$siteName = "Please type correct site name";

$name = trim($_POST["name"]);
$email = trim($_POST["email"]);
$phone = trim($_POST["phone"]);
$comment = trim($_POST["message"]);
$message = "\n<strong>Full Name:</strong> $name \n <strong>E-mail:</strong> $email \n <strong>Phone number:</strong> $phone \n <strong>Message:</strong> $comment \n";

$pagetitle = "Please contact with client \"$siteName\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");

?>
