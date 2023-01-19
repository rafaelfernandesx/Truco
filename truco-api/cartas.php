<?php
class Carta
{

    public function __construct(
        public readonly string $naipe,
        public int $valor,
        public readonly String $carta,
        public int $valorDaManilha,
        public bool $cartaVirada,
    ) {
    }
}

class Baralho {

}

$cartas = [
    new Carta(naipe: '♦', valor: 300, carta: 'Três de ouro', valorDaManilha: 0, cartaVirada: false),
    new Carta(naipe: '♠', valor: 300, carta: 'Três de espada', valorDaManilha: 0, cartaVirada: false),
    new Carta(naipe: '♥', valor: 300, carta: 'Três de copa', valorDaManilha: 0, cartaVirada: false),
    new Carta(naipe: '♣', valor: 300, carta: 'Três de paus', valorDaManilha: 0, cartaVirada: false),

    new Carta(naipe: '♦', valor: 200, carta: 'Dois de ouro', valorDaManilha: 0, cartaVirada: false),
    new Carta(naipe: '♠', valor: 200, carta: 'Dois de espada', valorDaManilha: 0, cartaVirada: false),
    new Carta(naipe: '♥', valor: 200, carta: 'Dois de copa', valorDaManilha: 0, cartaVirada: false),
    new Carta(naipe: '♣', valor: 200, carta: 'Dois de paus', valorDaManilha: 0, cartaVirada: false),

    new Carta(naipe: '♦', valor: 100, carta: 'Ás de ouro', valorDaManilha: 0, cartaVirada: false),
    new Carta(naipe: '♠', valor: 100, carta: 'Ás de espada', valorDaManilha: 0, cartaVirada: false),
    new Carta(naipe: '♥', valor: 100, carta: 'Ás de copa', valorDaManilha: 0, cartaVirada: false),
    new Carta(naipe: '♣', valor: 100, carta: 'Ás de paus', valorDaManilha: 0, cartaVirada: false),

    new Carta(naipe: '♦', valor: 13, carta: 'Rei de ouro', valorDaManilha: 0, cartaVirada: false),
    new Carta(naipe: '♠', valor: 13, carta: 'Rei de ouro', valorDaManilha: 0, cartaVirada: false),
    new Carta(naipe: '♥', valor: 13, carta: 'Rei de ouro', valorDaManilha: 0, cartaVirada: false),
    new Carta(naipe: '♣', valor: 13, carta: 'Rei de ouro', valorDaManilha: 0, cartaVirada: false),

    new Carta(naipe: '♦', valor: 12, carta: 'Valete de ouro', valorDaManilha: 0, cartaVirada: false),
    new Carta(naipe: '♠', valor: 12, carta: 'Valete de espada', valorDaManilha: 0, cartaVirada: false),
    new Carta(naipe: '♥', valor: 12, carta: 'Valete de copa', valorDaManilha: 0, cartaVirada: false),
    new Carta(naipe: '♣', valor: 12, carta: 'Valete de paus', valorDaManilha: 0, cartaVirada: false),

    new Carta(naipe: '♦', valor: 11, carta: 'Dama de ouro', valorDaManilha: 0, cartaVirada: false),
    new Carta(naipe: '♠', valor: 11, carta: 'Dama de espada', valorDaManilha: 0, cartaVirada: false),
    new Carta(naipe: '♥', valor: 11, carta: 'Dama de copa', valorDaManilha: 0, cartaVirada: false),
    new Carta(naipe: '♣', valor: 11, carta: 'Dama de paus', valorDaManilha: 0, cartaVirada: false),

    new Carta(naipe: '♦', valor: 7, carta: 'Sete de ouro', valorDaManilha: 0, cartaVirada: false),
    new Carta(naipe: '♠', valor: 7, carta: 'Sete de espada', valorDaManilha: 0, cartaVirada: false),
    new Carta(naipe: '♥', valor: 7, carta: 'Sete de copa', valorDaManilha: 0, cartaVirada: false),
    new Carta(naipe: '♣', valor: 7, carta: 'Sete de paus', valorDaManilha: 0, cartaVirada: false),

    new Carta(naipe: '♦', valor: 6, carta: 'Seis de ouro', valorDaManilha: 0, cartaVirada: false),
    new Carta(naipe: '♠', valor: 6, carta: 'Seis de espada', valorDaManilha: 0, cartaVirada: false),
    new Carta(naipe: '♥', valor: 6, carta: 'Seis de copa', valorDaManilha: 0, cartaVirada: false),
    new Carta(naipe: '♣', valor: 6, carta: 'Seis de paus', valorDaManilha: 0, cartaVirada: false),

    new Carta(naipe: '♦', valor: 5, carta: 'Cinco de ouro', valorDaManilha: 0, cartaVirada: false),
    new Carta(naipe: '♠', valor: 5, carta: 'Cinco de espada', valorDaManilha: 0, cartaVirada: false),
    new Carta(naipe: '♥', valor: 5, carta: 'Cinco de copa', valorDaManilha: 0, cartaVirada: false),
    new Carta(naipe: '♣', valor: 5, carta: 'Cinco de paus', valorDaManilha: 0, cartaVirada: false),

    new Carta(naipe: '♦', valor: 4, carta: 'Quatro de ouro', valorDaManilha: 0, cartaVirada: false),
    new Carta(naipe: '♠', valor: 4, carta: 'Quatro de espada', valorDaManilha: 0, cartaVirada: false),
    new Carta(naipe: '♥', valor: 4, carta: 'Quatro de copa', valorDaManilha: 0, cartaVirada: false),
    new Carta(naipe: '♣', valor: 4, carta: 'Quatro de paus', valorDaManilha: 0, cartaVirada: false),

];
