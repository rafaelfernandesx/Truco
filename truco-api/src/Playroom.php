<?php

require_once ('./Truco.php');

class Playroom {
    private Array $clients;
    private String $name;
    private String $password;
    private Truco $truco;

    function __construct(String $name, String $password)
    {
        $this->name = $name;
        $this->password = $password;
    }

    private function validatePassword(String $password) {
        return $this->password === $password;
    }

    function getName() {
        return $this->name;
    }

    function join() {

    }
}