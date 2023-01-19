<?php

class Jogador {
    public int $key;
    public String $nome;
    /**
     * @var array<int, Carta>
     */
    public array $cartas = [];
    public int $pontos = 0;

    public function __construct(int $key, string $nome) {
        $this->key= $key;
        $this->nome= $nome;
    }
}