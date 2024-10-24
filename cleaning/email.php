<?php
// Сначала получаем данные из POST-запроса
$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
$email = trim($_POST["email"]);
$services = trim($_POST["services"]);
$message = trim($_POST["message"]);

// Конструирование HTML-кода для письма
$html_message = "
<html>
<head>
  <title>Message from client:</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      color: #333;
    }
    .container {
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
    }
    img {
      display: block;
      margin: 0 auto;
    }
    h2 {
      margin-bottom:15px;
      color: #007bff;
    }
    p {
      margin-bottom:15px;
      line-height:140%;
    }
    table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 20px;
    }
    th, td {
      padding: 10px;
      border: 1px solid #ccc;
    }
    th {
      background-color: #f2f2f2;
    }
  </style>
</head>
<body>
  <div class='container'>
    <img src='img/logo.png' alt='Company Logo'>
    <h2>Hi there,</h2>
    <p>You have an unprocessed application from the site 'MaiditCleaner'. Please contact him:</p>
    <table>
      <tr>
        <th>Field</th>
        <th>Value</th>
      </tr>
      <tr>
        <td>Full Name:</td>
        <td>$name</td>
      </tr>
      <tr>
        <td>Phone number:</td>
        <td>$phone</td>
      </tr>
      <tr>
        <td>Email:</td>
        <td>$email</td>
      </tr>
      <tr>
      <td>Services:</td>
      <td>$services</td>
    </tr>
    <td>Message:</td>
    <td>$message</td>
  </tr>
    </table>
  </div>
</body>
</html>
";

$recipient = 'info@maiditcleaner.ca';
$subject = 'Please contact with client from website "MaiditCleaner"';

$smtpServer = 'hostus3.fornex.host';
$port = 465;
$username = 'info@maiditcleaner.ca';
$password = 'r7nv*UXhE&Z%&V>~';
$fromEmail = 'info@maiditcleaner.ca';
$fromName = 'MaiditCleaner';

// Подключение к SMTP серверу
$context = stream_context_create([
  'ssl' => [
    'verify_peer' => false,
    'verify_peer_name' => false
  ]
]);

$socket = stream_socket_client(
  "ssl://$smtpServer:$port",
  $errno,
  $errstr,
  30,
  STREAM_CLIENT_CONNECT,
  $context
);

if (!$socket) {
  echo "Failed to connect to server: $errstr ($errno)";
  return;
}

function getResponse($socket)
{
  $response = "";
  while ($str = fgets($socket, 512)) {
    $response .= $str;
    if (substr($str, 3, 1) == " ") {
      break;
    }
  }
  echo "Response: " . $response;
}

// Отправка команд SMTP серверу
fputs($socket, "EHLO $smtpServer\r\n");
getResponse($socket);

fputs($socket, "AUTH LOGIN\r\n");
getResponse($socket);

fputs($socket, base64_encode($username) . "\r\n");
getResponse($socket);

fputs($socket, base64_encode($password) . "\r\n");
getResponse($socket);

fputs($socket, "MAIL FROM: <$fromEmail>\r\n");
getResponse($socket);

fputs($socket, "RCPT TO: <$recipient>\r\n");
getResponse($socket);

fputs($socket, "DATA\r\n");
getResponse($socket);

// Собираем заголовки и тело письма
$headers = "From: $fromName <$fromEmail>\r\n" .
  "To: $recipient\r\n" .
  "Subject: $subject\r\n" .
  "Date: " . date(DATE_RFC2822) . "\r\n" .
  "MIME-Version: 1.0\r\n" .
  "Content-type: text/html; charset=UTF-8\r\n";

$mailBody = $headers . "\r\n" . $html_message;

fputs($socket, $mailBody . "\r\n.\r\n");
getResponse($socket);

fputs($socket, "QUIT\r\n");
getResponse($socket);

fclose($socket);
