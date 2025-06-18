<?php
// Сначала получаем данные из POST-запроса
$name = trim($_POST["name"]);
$email = trim($_POST["email"]);
$phone = trim($_POST["phone"]);
$comment = trim($_POST["message"]);

// Формируем сообщение
$message = "Full Name: $name \nE-mail: $email \nPhone number: $phone \nClient problem: $comment\n";

$recipient = 'venchak.renovation@gmail.com';
$subject = 'Please contact with client from website';

$smtpServer = 'hostus3.fornex.host';
$port = 465;
$username = 'info@venchak-renovation.com'; // Убедитесь, что используете безопасный метод хранения пароля
$password = 'Ultima224$';
$fromEmail = 'info@venchak-renovation.com';
$fromName = 'Venchak Renovation';

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





