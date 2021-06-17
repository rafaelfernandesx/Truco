<?php

require_once('./Client.php');
require_once('./Playroom.php');

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

$playrooms[] = new Palyroom('Sala do Jonia', '123');

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
