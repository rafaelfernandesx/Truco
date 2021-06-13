<?php

$host = 'localhost';
$port = '1234';
$null = NULL;

//TCP/IP sream
$socket = socket_create(AF_INET, SOCK_STREAM, SOL_TCP);
//reuseable port
socket_set_option($socket, SOL_SOCKET, SO_REUSEADDR, 1);

//bind socket to specified host
socket_bind($socket, 0, $port);

//listen to port
socket_listen($socket);

//create & add listning socket to the list
$clients = array($socket);

$clientList = [];

$salas = [];

//start endless loop, so that our script doesn't stop
while (true) {
    //manage multipal connections
    $changed = $clients;

    //returns the socket resources in $changed array
    socket_select($changed, $null, $null, 0, 10);

    //check for new socket; verifica se houve uma nova conexão e adiciona na lista de clientes conectados
    if (in_array($socket, $changed)) {
        $socket_new = socket_accept($socket); //accpet new socket
        $clients[] = $socket_new; //add socket to client array

        $header = socket_read($socket_new, 1024); //read data sent by the socket
        perform_handshaking($header, $socket_new, $host, $port); //perform websocket handshake

        socket_getpeername($socket_new, $ip); //get ip address of connected socket
        $response = mask(json_encode(array('type' => 'system', 'message' => $ip . ' connected'))); //prepare json data
        send_message($response); //notify all users about new connection

        //make room for new socket
        $found_socket = array_search($socket, $changed);
        unset($changed[$found_socket]);
    }

    //loop through all connected sockets
    foreach ($changed as $changed_socket) {

        //check for any incomming data
        while (socket_recv($changed_socket, $buf, 1024, 0) >= 1) {
            $received_text = unmask($buf); //unmask data
            receiveMessage($received_text, $changed_socket);
            // $tst_msg = json_decode($received_text); //json decode
            // $user_name = $tst_msg->name; //sender name
            // $user_message = $tst_msg->message; //message text

            // //prepare data to be sent to client
            // $response_text = mask(json_encode(array('type' => 'usermsg', 'name' => $user_name, 'message' => $user_message)));
            // send_message($response_text); //send data
            break 2; //exist this loop
        }

        $buf = @socket_read($changed_socket, 1024, PHP_NORMAL_READ);
        if ($buf === false) { // check disconnected client
            // remove client for $clients array
            $found_socket = array_search($changed_socket, $clients);
            socket_getpeername($changed_socket, $ip);
            unset($clients[$found_socket]);

            foreach ($clientList as $client) {
                if ($client->clientSocket == $changed_socket) {
                    $client->status = 'Disconnected';
                }
            }
            listarClients();
        }
    }
}
// close the listening socket
socket_close($socket);

function send_message($msg, $to = null)
{
    global $clients;
    if ($to == null) { //se for null envia pra todos cliente
        foreach ($clients as $changed_socket) {
            @socket_write($changed_socket, $msg, strlen($msg));
        }
    }else{
        @socket_write($to, $msg, strlen($msg));
    }
    return true;
}


//Unmask incoming framed message
function unmask($text)
{
    $length = ord($text[1]) & 127;
    if ($length == 126) {
        $masks = substr($text, 4, 4);
        $data = substr($text, 8);
    } elseif ($length == 127) {
        $masks = substr($text, 10, 4);
        $data = substr($text, 14);
    } else {
        $masks = substr($text, 2, 4);
        $data = substr($text, 6);
    }
    $text = "";
    for ($i = 0; $i < strlen($data); ++$i) {
        $text .= $data[$i] ^ $masks[$i % 4];
    }
    return $text;
}

//Encode message for transfer to client.
function mask($text)
{
    $b1 = 0x80 | (0x1 & 0x0f);
    $length = strlen($text);

    if ($length <= 125)
        $header = pack('CC', $b1, $length);
    elseif ($length > 125 && $length < 65536)
        $header = pack('CCn', $b1, 126, $length);
    elseif ($length >= 65536)
        $header = pack('CCNN', $b1, 127, $length);
    return $header . $text;
}

//handshake new client.
function perform_handshaking($receved_header, $client_conn, $host, $port)
{
    $headers = array();
    $lines = preg_split("/\r\n/", $receved_header);
    foreach ($lines as $line) {
        $line = chop($line);
        if (preg_match('/\A(\S+): (.*)\z/', $line, $matches)) {
            $headers[$matches[1]] = $matches[2];
        }
    }

    $secKey = $headers['Sec-WebSocket-Key'];
    $secAccept = base64_encode(pack('H*', sha1($secKey . '258EAFA5-E914-47DA-95CA-C5AB0DC85B11')));
    //hand shaking header
    $upgrade  = "HTTP/1.1 101 Web Socket Protocol Handshake\r\n" .
        "Upgrade: websocket\r\n" .
        "Connection: Upgrade\r\n" .
        "WebSocket-Origin: $host\r\n" .
        "WebSocket-Location: ws://$host:$port/demo/shout.php\r\n" .
        "Sec-WebSocket-Accept:$secAccept\r\n\r\n";
    socket_write($client_conn, $upgrade, strlen($upgrade));
}



function receiveMessage($msg, $client_socket) {
    if (strlen($msg) > 7) {
        $msg = json_decode($msg);
        switch ($msg->type) {
            case 'bindClientName':
                bindClientName($msg->data, $client_socket);
                break;
            case 'criarSala':
                criarSala($msg->data);
                break;
            case 'listarSalas':
                listarSalas($client_socket);
                break;
            case 'entrarEmSala':
                entrarEmSala($msg->data, $client_socket);
                break;
            case 'listarClients':
                listarClients();
                break;
        }
    }
}


function criarSala($sala) {
    global $salas;
    $keySala = time();
    $sala->keySala = $keySala;
    $salas[$keySala] = [
        'data' => $sala,
        'clients' => []
    ];

    $sala->qtd = count($salas[$keySala]['clients']);
    $sala->status = 'Aguardando';

    unset($sala->senha);

    $newSalas = mask(json_encode(['type' => 'novaSala', 'data' => $sala]));
    send_message($newSalas); //send data
}

function listarSalas($client) {
    global $salas;
    $listaSalas = [];
    foreach ($salas as $sala) {
        $listaSalas[] = $sala['data'];
    }
    $listaSalas = mask(json_encode(['type' => 'listaSalas', 'data' => $listaSalas]));
    send_message($listaSalas, $client); //send data
}

function entrarEmSala($data, $client) {
    global $salas;
    $listaSalas = [];
    if (!in_array($client, $salas[$data->keySala]['clients'])) {
        $salas[$data->keySala]['clients'][] = $client;
        $salas[$data->keySala]['data']->qtd += 1;
        foreach ($salas as $sala) {
            $listaSalas[] = $sala['data'];
        }
        $listaSalas = mask(json_encode(['type' => 'listaSalas', 'data' => $listaSalas]));
        send_message($listaSalas); //send data
    }else{
        $listaSalas = mask(json_encode(['type' => 'erroSala', 'data' => 'Você ja está na sala']));
        send_message($listaSalas, $client); //send data
    }
}


function listarClients() {
    global $clients;
    global $clientList;
    $listaClients = [];
    foreach ($clientList as $key => $value) {
        $listaClients[] = $value;
    }

    $listaClients = mask(json_encode(['type' => 'listaClients', 'data' => $listaClients, 'cliSck' => $clients]));
    send_message($listaClients); //send data
}

function bindClientName($clientData, $client) {
    global $clientList;
    $clientData->clientSocket = $client;
    $clientData->lastSync = time();
    $clientData->status = 'Disponivel';
    $clientList[$clientData->clientID] = $clientData;
}