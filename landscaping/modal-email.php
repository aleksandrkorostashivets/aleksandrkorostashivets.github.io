<?php

$recepient = "info@westyardinc.ca";
$siteemail ="info@westyardinc.ca";
$siteName = "westyardinc.ca";

$name = trim($_POST["modalName"]);
$email = trim($_POST["modalEmail"]);
$phone = trim($_POST["modalPhone"]);
$message = "Full Name: $name \n E-mail: $email \n Phone number: $phone \n";

$pagetitle = "Please contact with client \"$siteName\"";
$headers = "From: $siteemail\r\n";
$headers .= "Content-type: text/plain; charset=\"utf-8\"\r\n";

if (mail($recepient, $pagetitle, $message, $headers)) {
    echo "Email sent successfully";
} else {
    echo "Email sending failed";
}
?>
