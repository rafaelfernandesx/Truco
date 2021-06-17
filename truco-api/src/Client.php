<?php

class Client {
    private bool $isInPlayRoom;
    private Int $id;
    private String $name;

    function __construct(Int $id, String $name)
    {
        $this->id = $id;
        $this->name = $name;
    }

}