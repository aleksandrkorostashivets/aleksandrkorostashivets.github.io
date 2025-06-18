<?php
// Сначала получаем данные из POST-запроса
$name = trim($_POST["modalName"]);
$phone = trim($_POST["modalPhone"]);

// Формируем сообщение
$message = "Full Name: $name \nPhone number: $phone \n";

$recipient = 'smarthandymangta@gmail.com';
$subject = 'Please contact with client from website "SmartHandyMan" - (10% discont)';

$smtpServer = 'hostus3.fornex.host';
$port = 465;
$username = 'info@smarthandyman.ca';
$password = 'r7nv*UXhE&Z%&V>~';
$fromEmail = 'info@smarthandyman.ca';
$fromName = 'SmartHandyMan';

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

function getResponse($socket) {
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
           "Date: " . date(DATE_RFC2822) . "\r\n";

$mailBody = $headers . "\r\n" . $message;

fputs($socket, $mailBody . "\r\n.\r\n");
getResponse($socket);

fputs($socket, "QUIT\r\n");
getResponse($socket);

fclose($socket);
?>
