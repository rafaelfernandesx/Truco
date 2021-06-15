<?php

// $carcas ♦♠♥♣
require_once './Truco.php';
require_once './PiraSocket.php';

$host = 'localhost';
$port = '1234';


$socket = new PiraSocket();
$socket->onDisconnect(function ($message, $client) use ($socket) {
    $socket->sendMessage($message);
});

$socket->onConnect(function ($message, $client) use ($socket) {
    $socket->sendMessage($message);
});

$socket->onMessage(function ($message, $client) use ($socket) {
    if (strlen($message) > 7) {
        $message = json_decode($message);
        switch ($message->type) {
            case 'bindClientName':
                $response = json_encode('bindClientFeito');
                $socket->sendMessage($response);
                break;
            case 'listarClients':
                $clients = $socket->getClients();
                $response = [
                    'type' => 'listaClients',
                    'data' => array_shift($clients) //remove o primeiro elemento do array que é o servidor
                ];
                $socket->sendMessage(json_encode($response), $client);
                break;
        }
    }
});
// $truco = new Truco();


$socket->run($host, $port);
