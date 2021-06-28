<?php

class Client {
    private bool $isInPlayRoom;
    private Int $socketId;
    private String $name;
    private Playroom $playroom;

    function __construct(Int $socketId, String $name)
    {
        $this->socketId = $socketId;
        $this->name = $name;
    }

    public function setRoom(Playroom $playroom): void{
        $this->playroom = $playroom;
    }

    public function getRoom(): Playroom {
        return $this->playroom;
    }
}