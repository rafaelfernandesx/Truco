<?php
class Carta
{

    public function __construct(
        public readonly string $naipe,
        public int $valor,
        public readonly String $carta,
        public int $manilha,
        public bool $cartaVirada,
    ) {
    }
}

class Baralho {

}

$cartas = [
    new Carta(naipe: '♦', valor: 300, carta: 'Três de ouro', manilha: 0, cartaVirada: false),
    new Carta(naipe: '♠', valor: 300, carta: 'Três de espada', manilha: 0, cartaVirada: false),
    new Carta(naipe: '♥', valor: 300, carta: 'Três de copa', manilha: 0, cartaVirada: false),
    new Carta(naipe: '♣', valor: 300, carta: 'Três de paus', manilha: 0, cartaVirada: false),

    new Carta(naipe: '♦', valor: 200, carta: 'Dois de ouro', manilha: 0, cartaVirada: false),
    new Carta(naipe: '♠', valor: 200, carta: 'Dois de espada', manilha: 0, cartaVirada: false),
    new Carta(naipe: '♥', valor: 200, carta: 'Dois de copa', manilha: 0, cartaVirada: false),
    new Carta(naipe: '♣', valor: 200, carta: 'Dois de paus', manilha: 0, cartaVirada: false),

    new Carta(naipe: '♦', valor: 100, carta: 'Ás de ouro', manilha: 0, cartaVirada: false),
    new Carta(naipe: '♠', valor: 100, carta: 'Ás de espada', manilha: 0, cartaVirada: false),
    new Carta(naipe: '♥', valor: 100, carta: 'Ás de copa', manilha: 0, cartaVirada: false),
    new Carta(naipe: '♣', valor: 100, carta: 'Ás de paus', manilha: 0, cartaVirada: false),

    new Carta(naipe: '♦', valor: 13, carta: 'Rei de ouro', manilha: 0, cartaVirada: false),
    new Carta(naipe: '♠', valor: 13, carta: 'Rei de ouro', manilha: 0, cartaVirada: false),
    new Carta(naipe: '♥', valor: 13, carta: 'Rei de ouro', manilha: 0, cartaVirada: false),
    new Carta(naipe: '♣', valor: 13, carta: 'Rei de ouro', manilha: 0, cartaVirada: false),

    new Carta(naipe: '♦', valor: 12, carta: 'Valete de ouro', manilha: 0, cartaVirada: false),
    new Carta(naipe: '♠', valor: 12, carta: 'Valete de espada', manilha: 0, cartaVirada: false),
    new Carta(naipe: '♥', valor: 12, carta: 'Valete de copa', manilha: 0, cartaVirada: false),
    new Carta(naipe: '♣', valor: 12, carta: 'Valete de paus', manilha: 0, cartaVirada: false),

    new Carta(naipe: '♦', valor: 11, carta: 'Dama de ouro', manilha: 0, cartaVirada: false),
    new Carta(naipe: '♠', valor: 11, carta: 'Dama de espada', manilha: 0, cartaVirada: false),
    new Carta(naipe: '♥', valor: 11, carta: 'Dama de copa', manilha: 0, cartaVirada: false),
    new Carta(naipe: '♣', valor: 11, carta: 'Dama de paus', manilha: 0, cartaVirada: false),

    new Carta(naipe: '♦', valor: 7, carta: 'Sete de ouro', manilha: 0, cartaVirada: false),
    new Carta(naipe: '♠', valor: 7, carta: 'Sete de espada', manilha: 0, cartaVirada: false),
    new Carta(naipe: '♥', valor: 7, carta: 'Sete de copa', manilha: 0, cartaVirada: false),
    new Carta(naipe: '♣', valor: 7, carta: 'Sete de paus', manilha: 0, cartaVirada: false),

    new Carta(naipe: '♦', valor: 6, carta: 'Seis de ouro', manilha: 0, cartaVirada: false),
    new Carta(naipe: '♠', valor: 6, carta: 'Seis de espada', manilha: 0, cartaVirada: false),
    new Carta(naipe: '♥', valor: 6, carta: 'Seis de copa', manilha: 0, cartaVirada: false),
    new Carta(naipe: '♣', valor: 6, carta: 'Seis de paus', manilha: 0, cartaVirada: false),

    new Carta(naipe: '♦', valor: 5, carta: 'Cinco de ouro', manilha: 0, cartaVirada: false),
    new Carta(naipe: '♠', valor: 5, carta: 'Cinco de espada', manilha: 0, cartaVirada: false),
    new Carta(naipe: '♥', valor: 5, carta: 'Cinco de copa', manilha: 0, cartaVirada: false),
    new Carta(naipe: '♣', valor: 5, carta: 'Cinco de paus', manilha: 0, cartaVirada: false),

    new Carta(naipe: '♦', valor: 4, carta: 'Quatro de ouro', manilha: 0, cartaVirada: false),
    new Carta(naipe: '♠', valor: 4, carta: 'Quatro de espada', manilha: 0, cartaVirada: false),
    new Carta(naipe: '♥', valor: 4, carta: 'Quatro de copa', manilha: 0, cartaVirada: false),
    new Carta(naipe: '♣', valor: 4, carta: 'Quatro de paus', manilha: 0, cartaVirada: false),

];
