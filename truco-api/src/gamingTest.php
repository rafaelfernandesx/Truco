<?php

require_once('./Client.php');
require_once('./Playroom.php');
require_once('./Truco.php');
require_once('./PiraSocket.php');


$host = 'localhost';
$port = '1234';

$socket = new PiraSocket();
$clients = [];
$playrooms = [];

$socket->onDisconnect(function (String $message, Socket $client) use ($socket) {
    unset($clients[$client]);
    $socket->sendMessage($message);
});

$socket->onConnect(function (String $message, Socket $client) use ($socket) {
    $clients[$client] = ['socket' => $client];
    $socket->sendMessage($message);
});

$socket->onMessage(function (String $message, Socket $client) use ($socket) {
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

$socket->run($host, $port);


























/*

$connectedClients = [
    [
        "id" => 0,
        "socket" => 0
    ],
    [
        "id" => 1,
        "socket" => 0
    ]
];

$playrooms = [];
$clients = [];

$playrooms[] = new Playroom('Sala do Jonia', '123');

###### Req
$playroomId = 0;
$clientReq = [
    "id" => 0,
    "name" => 'Jonia'
];
#####


$clients[] = new Client($clientReq['id'], $clientReq['name']);
$playroom = $playrooms[$playroomId];

$playroom->join();
print_r($playroom);
// foreach ($clients as $connectedClient) {
//     $client = new Client();

//     $playrooms.add($client);
// }

// [
//     "id" => 40,
//     "name" => "Jonias_room"
// ]

*/