<?php

class Truco
{
    public $baralho;
    public $cartas;
    public $jogadores;
    public $cartaVirada;
    public $historicoRodadas;
    public $rodadasAnteriores;
    public $rodadaAtual;

    function __construct($jogadores)
    {
        $this->jogadores = $jogadores;
        require_once './cartas-old.php';
        $this->cartas = $cartas;
    }

    public function embaralhar()
    {
        $this->baralho = $this->cartas;
        shuffle($this->baralho);
        return $this;
    }

    public function virarManilha()
    {
        $this->cartaVirada = array_shift($this->baralho);
        echo '<pre>';
        echo 'A carta virada é ' . $this->cartaVirada['valor'] . ' de ' . $this->cartaVirada['naipe'] . '<br>';

        switch ($this->cartaVirada['valor']) {
            case 7:
                foreach ($this->baralho as $key => $value) {
                    if ($this->baralho[$key]['valor'] == 11) {
                        $this->baralho[$key]['manilha'] = $this->adicionarValorNaManilha($this->baralho[$key]);
                    }
                }
                break;
            case 13:
                foreach ($this->baralho as $key => $value) {
                    if ($this->baralho[$key]['valor'] == 100) {
                        $this->baralho[$key]['manilha'] = $this->adicionarValorNaManilha($this->baralho[$key]);
                    }
                }
                break;
            case 100:
                foreach ($this->baralho as $key => $value) {
                    if ($this->baralho[$key]['valor'] == 200) {
                        $this->baralho[$key]['manilha'] = $this->adicionarValorNaManilha($this->baralho[$key]);
                    }
                }
                break;
            case 200:
                foreach ($this->baralho as $key => $value) {
                    if ($this->baralho[$key]['valor'] == 300) {
                        $this->baralho[$key]['manilha'] = $this->adicionarValorNaManilha($this->baralho[$key]);
                    }
                }
                break;
            case 300:
                foreach ($this->baralho as $key => $value) {
                    if ($this->baralho[$key]['valor'] == 4) {
                        $this->baralho[$key]['manilha'] = $this->adicionarValorNaManilha($this->baralho[$key]);
                    }
                }
                break;
            default:
                foreach ($this->baralho as $key => $value) {
                    if ($this->baralho[$key]['valor'] == $this->cartaVirada['valor'] + 1) {
                        $this->baralho[$key]['manilha'] = $this->adicionarValorNaManilha($this->baralho[$key]);
                    }
                }
                break;
        }
        return $this;
    }

    public function adicionarValorNaManilha($carta)
    {
        switch ($carta['naipe']) {
            case '♣':
                $carta['valor'] += 4000;
                return $carta['valor'];
                break;
            case '♥':
                $carta['valor'] += 3000;
                return $carta['valor'];
                break;
            case '♠':
                $carta['valor'] += 2000;
                return $carta['valor'];
                break;
            case '♦':
                $carta['valor'] += 1000;
                return $carta['valor'];
                break;
        }
    }

    public function darCartas()
    {
        for ($i = 0; $i < count($this->jogadores); $i++) {
            $this->jogadores[$i]['cartas'][] = array_shift($this->baralho);
            $this->jogadores[$i]['cartas'][] = array_shift($this->baralho);
            $this->jogadores[$i]['cartas'][] = array_shift($this->baralho);
        }
        return $this;
    }

    public function jogarCarta($jogador, $carta)
    {
        echo "Selecione uma carta:\n";
        print_r($this->jogadores[$jogador]['cartas']);
        $this->rodadaAtual[] = [
            'carta' => $this->jogadores[$jogador]['cartas'][$carta],
            'jogador' => $this->jogadores[$jogador]['nome'],
            'jogadorkey' => $this->jogadores[$jogador]['key']
        ];

        if (!empty($this->jogadores[$jogador]['cartas'][$carta]['manilha'])) {
            if ($this->jogadores[$jogador]['cartas'][$carta]['naipe'] == '♣') {
                echo 'O jogador: ' . $this->jogadores[$jogador]['nome'] . ' jogou a carta xablau ' . $this->jogadores[$jogador]['cartas'][$carta]['naipe'] . '<br>';
            }else{
                echo 'O jogador: ' . $this->jogadores[$jogador]['nome'] . ' jogou a carta: ' . $this->jogadores[$jogador]['cartas'][$carta]['valor'] . ' de ' . $this->jogadores[$jogador]['cartas'][$carta]['naipe'] .' manilha<br>';
            }
        }else{
            echo 'O jogador: ' . $this->jogadores[$jogador]['nome'] . ' jogou a carta: ' . $this->jogadores[$jogador]['cartas'][$carta]['valor'] . ' de ' . $this->jogadores[$jogador]['cartas'][$carta]['naipe'] .' <br>';
        }

        unset($this->jogadores[$jogador]['cartas'][$carta]);
        $this->verificarGanhadorRodadaAtual();

        return $this;
    }

    public function verificarGanhadorRodadaAtual()
    {
        if (count($this->rodadaAtual) == 4) {
            $cartaMaior = ['carta' => ['naipe' => 'none', 'valor' => 0]];

            foreach ($this->rodadaAtual as $key => $value) {
                if (!empty($this->rodadaAtual[$key]['carta']['manilha'])) {
                    if (!empty($cartaMaior['carta']['manilha'])) {
                        if ($this->rodadaAtual[$key]['carta']['manilha'] > $cartaMaior['carta']['manilha']) {
                            $cartaMaior = $this->rodadaAtual[$key];
                        }
                    } else {
                        if ($this->rodadaAtual[$key]['carta']['manilha'] > $cartaMaior['carta']['valor']) {
                            $cartaMaior = $this->rodadaAtual[$key];
                        }
                    }
                } else {
                    if (!empty($cartaMaior['carta']['manilha'])) {
                        if ($this->rodadaAtual[$key]['carta']['valor'] > $cartaMaior['carta']['manilha']) {
                            $cartaMaior = $this->rodadaAtual[$key];
                        }
                    } else {
                        if ($this->rodadaAtual[$key]['carta']['valor'] > $cartaMaior['carta']['valor']) {
                            $cartaMaior = $this->rodadaAtual[$key];
                        }
                    }
                }
            }

            $empate = 0;
            foreach ($this->rodadaAtual as $rodada) {
                if (empty($cartaMaior['carta']['manilha'])) {
                    if ($cartaMaior['carta']['valor'] == $rodada['carta']['valor']) {
                        $empate++;
                    }
                }
            }

            if ($empate > 1) {
                echo 'A jogada empatou <br>';
                $this->rodadasAnteriores[] = $this->rodadaAtual;
                $this->rodadaAtual = [];
                return $this;
            } elseif ($empate < 2) {
                $this->jogadores[$cartaMaior['jogadorkey']]['pontos']++;
                $this->rodadasAnteriores[] = $this->rodadaAtual;
            }

            echo "O " . $cartaMaior['jogador'] . " ganhou <br>";
            $this->rodadaAtual = [];
            return $this;
        }
    }
}


$jogadores = [
    [
        'key' => 0,
        'nome' => 'jogador 1',
        'cartas' => [],
        'pontos' => 0,
    ],
    [
        'key' => 1,
        'nome' => 'jogador 2',
        'cartas' => [],
        'pontos' => 0,
    ],
    [
        'key' => 2,
        'nome' => 'jogador 3',
        'cartas' => [],
        'pontos' => 0,
    ],
    [
        'key' => 3,
        'nome' => 'jogador 4',
        'cartas' => [],
        'pontos' => 0,
    ]
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