<?php

// $carcas ♦♠♥♣
require_once './classTruco.php';
require_once './jogador.php';

    /**
     * @var array<int, Jogador>
     */
$jogadores = [
    new Jogador(0, 'Jogador 1'),
    new Jogador(1, 'Jogador 2'),
    new Jogador(2, 'Jogador 3'),
    new Jogador(3, 'Jogador 4'),
];

$classTruco = new Truco($jogadores);
$classTruco->embaralhar();
$classTruco->virarManilha();
$classTruco->darCartas();

$classTruco->jogarCarta(0, 1)->jogarCarta(1, 1)->jogarCarta(2, 1)->jogarCarta(3, 1);

$classTruco->jogarCarta(3, 0); //supondo que esse ganhou a primeira rodada de cartas então ele começa
$classTruco->jogarCarta(0, 0)->jogarCarta(1, 0)->jogarCarta(2, 0);

$classTruco->jogarCarta(2, 2); //supondo que esse ganhou a segunda rodada de cartas então ele começa
$classTruco->jogarCarta(1, 2)->jogarCarta(3, 2)->jogarCarta(0, 2);


echo '<pre>';
print_r($classTruco);

exit;