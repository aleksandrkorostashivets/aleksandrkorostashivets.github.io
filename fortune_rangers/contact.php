<?php

$recepient = "";// type email here
$siteName = "Fortune Rangers";

$email = trim($_POST["contact-email"]);
$userComment = trim($_POST["comment"]);
$message = "Email: $email \Message: $userComment";

$pagetitle = "Contact with client \"$siteName\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");

?>
