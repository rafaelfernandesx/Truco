<?php

class Truco
{
    /**
     * @var array<int, Carta>
     */
    public $baralho;
    /**
     * @var array<int, Carta>
     */
    public array $cartas;
    public array $jogadores;
    public Carta $cartaVirada;
    public $historicoRodadas;
    public $rodadasAnteriores;
    public $rodadaAtual;

    function __construct(array $jogadores)
    {
        $this->jogadores = $jogadores;
        require_once './cartas.php';
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
        echo 'A carta virada é ' . $this->cartaVirada->carta . '<br>';

        switch ($this->cartaVirada->valor) {
            case 7:
                foreach ($this->baralho as $key => $carta) {
                    if ($carta->valor == 11) {
                        $carta->valorDaManilha = $this->adicionarValorNaManilha($carta);
                    }
                }
                break;
            case 13:
                foreach ($this->baralho as $key => $carta) {
                    if ($carta->valor == 100) {
                        $carta->valorDaManilha = $this->adicionarValorNaManilha($carta);
                    }
                }
                break;
            case 100:
                foreach ($this->baralho as $key => $carta) {
                    if ($carta->valor == 200) {
                        $carta->valorDaManilha = $this->adicionarValorNaManilha($this->baralho[$key]);
                    }
                }
                break;
            case 200:
                foreach ($this->baralho as $key => $carta) {
                    if ($carta->valor == 300) {
                        $carta->valorDaManilha = $this->adicionarValorNaManilha($carta);
                    }
                }
                break;
            case 300:
                foreach ($this->baralho as $key => $carta) {
                    if ($carta->valor == 4) {
                        $carta->valorDaManilha = $this->adicionarValorNaManilha($carta);
                    }
                }
                break;
            default:
                foreach ($this->baralho as $key => $carta) {
                    if ($carta->valor == $this->cartaVirada->valor + 1) {
                        $carta->valorDaManilha = $this->adicionarValorNaManilha($carta);
                    }
                }
                break;
        }
        return $this;
    }

    public function adicionarValorNaManilha(Carta $carta):int
    {
        switch ($carta->naipe) {
            case '♣':
                $carta->valor += 4000;
                return $carta->valor;
            case '♥':
                $carta->valor += 3000;
                return $carta->valor;
            case '♠':
                $carta->valor += 2000;
                return $carta->valor;
            case '♦':
                $carta->valor += 1000;
                return $carta->valor;
        }
        throw new Exception('Carta sem naipe!');
    }

    public function darCartas(): Truco
    {
        for ($i = 0; $i < count($this->jogadores); $i++) {
            $this->jogadores[$i]['cartas'][] = array_shift($this->baralho);
            $this->jogadores[$i]['cartas'][] = array_shift($this->baralho);
            $this->jogadores[$i]['cartas'][] = array_shift($this->baralho);
        }
        return $this;
    }

    public function jogarCarta(int $jogador, int $carta): Truco
    {
        echo "Selecione uma carta:\n";
        print_r($this->jogadores[$jogador]['cartas']);
        // $carta = readline("Index da carta: ") || $carta;
        $this->rodadaAtual[] = [
            'carta' => $this->jogadores[$jogador]['cartas'][$carta],
            'jogador' => $this->jogadores[$jogador]['nome'],
            'jogadorkey' => $this->jogadores[$jogador]['key']
        ];

        if (!empty($this->jogadores[$jogador]['cartas'][$carta]->manilha)) {
            if ($this->jogadores[$jogador]['cartas'][$carta]->naipe == '♣') {
                echo 'O jogador: ' . $this->jogadores[$jogador]['nome'] . ' jogou a carta xablau ' . $this->jogadores[$jogador]['cartas'][$carta]->naipe . '<br>';
            } else {
                echo 'O jogador: ' . $this->jogadores[$jogador]['nome'] . ' jogou a carta: ' . $this->jogadores[$jogador]['cartas'][$carta]->valor . ' de ' . $this->jogadores[$jogador]['cartas'][$carta]->naipe . ' manilha<br>';
            }
        } else {
            echo 'O jogador: ' . $this->jogadores[$jogador]['nome'] . ' jogou a carta: ' . $this->jogadores[$jogador]['cartas'][$carta]->valor . ' de ' . $this->jogadores[$jogador]['cartas'][$carta]->naipe . ' <br>';
        }

        unset($this->jogadores[$jogador]['cartas'][$carta]);
        $this->verificarGanhadorRodadaAtual();

        return $this;
    }

    public function verificarGanhadorRodadaAtual(): Truco
    {
        if (count($this->rodadaAtual) == 4) {
                /**
                 * @var array<string, Carta>
                 */
            $cartaMaior = ['carta' =>new Carta(naipe: 'none', valor: 0, carta: 'none', valorDaManilha: 0, cartaVirada: false)];

            foreach ($this->rodadaAtual as $key => $value) {
                if (!empty($this->rodadaAtual[$key]['carta']->valorDaManilha)) {
                    if (!empty($cartaMaior['carta']->valorDaManilha)) {
                        if ($this->rodadaAtual[$key]['carta']->valorDaManilha > $cartaMaior['carta']->valorDaManilha) {
                            $cartaMaior = $this->rodadaAtual[$key];
                        }
                    } else {
                        if ($this->rodadaAtual[$key]['carta']->valorDaManilha > $cartaMaior['carta']->valor) {
                            $cartaMaior = $this->rodadaAtual[$key];
                        }
                    }
                } else {
                    if (!empty($cartaMaior['carta']->valorDaManilha)) {
                        if ($this->rodadaAtual[$key]['carta']->valorDaManilha > $cartaMaior['carta']->valorDaManilha) {
                            $cartaMaior = $this->rodadaAtual[$key];
                        }
                    } else {
                        if ($this->rodadaAtual[$key]['carta']->valorDaManilha > $cartaMaior['carta']->valor) {
                            $cartaMaior = $this->rodadaAtual[$key];
                        }
                    }
                }
            }

            $empate = 0;
            foreach ($this->rodadaAtual as $rodada) {
                if (empty($cartaMaior['carta']->valorDaManilha)) {
                    if ($cartaMaior['carta']->valor == $rodada['carta']->valor) {
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
        return $this;
    }
}
