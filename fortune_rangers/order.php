<?php

$recepient = "";// type email here
$siteName = "Fortune Rangers";

$email = trim($_POST["contact-email"]);
$message = "Email: $email";

$pagetitle = "Order from client \"$siteName\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");

?>
