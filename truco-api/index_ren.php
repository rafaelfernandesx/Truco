<?php

// $carcas ♦♠♥♣
require_once './Truco.php';
require_once './PiraSocket.php';

$host = 'localhost';
$port = '1234';
$null = NULL;

$messageHandler = function () {

};

$socket = new PiraSocket();
// $socket->
// $truco = new Truco();


$socket->run($host, $port);
