<?php

class PiraSocket {
    private $connectHandler;
    private $disconnectHandler;
    private $messageHandler;
    private $errorHandler;

    private $clients;

    function __construct()
    {
        $socket = null;
        // TCP/IP sream
        $socket = socket_create(AF_INET, SOCK_STREAM, SOL_TCP);
        // Reuseable port
        socket_set_option($socket, SOL_SOCKET, SO_REUSEADDR, 1);

        $this->socket = $socket;
    }

    private function performHandshaking($receved_header, $client_conn, $host, $port)
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

    //$this->mask incoming framed message
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


    function sendMessage($msg, $to = null)
    {
        $msg = $this->mask($msg);
        if ($to == null) { //se for null envia pra todos cliente
            foreach ($this->clients as $changed_socket) {
                @socket_write($changed_socket, $msg, strlen($msg));
            }
        }else{
            @socket_write($to, $msg, strlen($msg));
        }

        return true;
    }

    function onConnect(Closure $handler) {
        $this->connectHandler = $handler;
    }

    function onDisconnect(Closure $handler) {
        $this->disconnectHandler = $handler;
    }

    function onError(Closure $handler) {
        $this->errorHandler = $handler;
    }

    function onMessage(Closure $handler) {
        $this->messageHandler = $handler;
    }

    function getClients() {
        return $this->clients;
    }


    function listen(String $host, int $port, $socket) {
        $null = NULL;
        // Create & add listning socket to the list
        $this->clients = array($socket);

        $clientList = [];

        // Start endless loop, so that our script doesn't stop
        while (true) {
            // Manage multipal connections
            $changed = $this->clients;

            // Returns the socket resources in $changed array
            socket_select($changed, $null, $null, 0, 10);

            // Check for new socket. Verifica se houve uma nova conexão e adiciona na lista de clientes conectados
            if (in_array($socket, $changed)) {
                $socket_new = socket_accept($socket); // Accpet new socket
                $this->clients[] = $socket_new; // Add socket to client array

                $header = socket_read($socket_new, 1024); // Read data sent by the socket
                $this->performHandshaking($header, $socket_new, $host, $port); // Perform websocket handshake

                socket_getpeername($socket_new, $ip); // Get ip address of connected socket
                $message = json_encode(array('type' => 'system', 'message' => $ip . ' connected'));
                $connectHandler = $this->connectHandler;
                $connectHandler($message, $socket_new);// Notify all users about new connection

                // Make room for new socket
                $found_socket = array_search($socket, $changed);
                unset($changed[$found_socket]);
            }

            // Loop through all connected sockets.
            foreach ($changed as $changed_socket) {

                // Check for any incomming data
                while (socket_recv($changed_socket, $buf, 1024, 0) >= 1) {
                    $received_text = $this->unmask($buf); //$this->un$this->mask data
                    $messageHandler = $this->messageHandler;

                    $messageHandler($received_text, $changed_socket);
                    break 2;
                }

                $buf = @socket_read($changed_socket, 1024, PHP_NORMAL_READ);
                if ($buf === false) { // check disconnected client
                    // remove client for $this->clients array
                    $found_socket = array_search($changed_socket, $this->clients);
                    socket_getpeername($changed_socket, $ip);
                    unset($this->clients[$found_socket]);

                    $message = json_encode(array('type' => 'system', 'message' => $ip . ' disconnected'));
                    $disconnectHandler = $this->disconnectHandler;
                    $disconnectHandler($message, $changed_socket);
                }
            }
        }
    }

    function run(String $host, int $port) {
        $socket = $this->socket;

        // Bind socket to specified host
        socket_bind($socket, 0, $port);

        // Listen to port
        socket_listen($socket);

        $this->listen($host, $port, $socket);
    }
}