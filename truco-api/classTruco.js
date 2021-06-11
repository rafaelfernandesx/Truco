class Truco {
    constructor(jogadores) {
        this.manilha = [];
        this.historicoRodadas = [];
        this.rodadasAnteriores = [];
        this.rodadaAtual = [];
        this.jogadores = jogadores;
        this.baralho =
            [

                { 'naipe': '♦', 'valor': 300 },
                { 'naipe': '♠', 'valor': 300 },
                { 'naipe': '♥', 'valor': 300 },
                { 'naipe': '♣', 'valor': 300 },

                { 'naipe': '♦', 'valor': 200 },
                { 'naipe': '♠', 'valor': 200 },
                { 'naipe': '♥', 'valor': 200 },
                { 'naipe': '♣', 'valor': 200 },

                { 'naipe': '♦', 'valor': 100 },
                { 'naipe': '♠', 'valor': 100 },
                { 'naipe': '♥', 'valor': 100 },
                { 'naipe': '♣', 'valor': 100 },

                { 'naipe': '♦', 'valor': 13 },
                { 'naipe': '♠', 'valor': 13 },
                { 'naipe': '♥', 'valor': 13 },
                { 'naipe': '♣', 'valor': 13 },

                { 'naipe': '♦', 'valor': 12 },
                { 'naipe': '♠', 'valor': 12 },
                { 'naipe': '♥', 'valor': 12 },
                { 'naipe': '♣', 'valor': 12 },

                { 'naipe': '♦', 'valor': 11 },
                { 'naipe': '♠', 'valor': 11 },
                { 'naipe': '♥', 'valor': 11 },
                { 'naipe': '♣', 'valor': 11 },

                { 'naipe': '♦', 'valor': 7 },
                { 'naipe': '♠', 'valor': 7 },
                { 'naipe': '♥', 'valor': 7 },
                { 'naipe': '♣', 'valor': 7 },

                { 'naipe': '♦', 'valor': 6 },
                { 'naipe': '♠', 'valor': 6 },
                { 'naipe': '♥', 'valor': 6 },
                { 'naipe': '♣', 'valor': 6 },

                { 'naipe': '♦', 'valor': 5 },
                { 'naipe': '♠', 'valor': 5 },
                { 'naipe': '♥', 'valor': 5 },
                { 'naipe': '♣', 'valor': 5 },

                { 'naipe': '♦', 'valor': 4 },
                { 'naipe': '♠', 'valor': 4 },
                { 'naipe': '♥', 'valor': 4 },
                { 'naipe': '♣', 'valor': 4 },
            ];
        this.embaralhar();
        this.virarManilha();
    }



    embaralhar() {
        this.baralho.sort(() => .5 - Math.random());
        return this;
    }

    virarManilha() {

        var key;

        this.manilha = this.baralho.shift();
        console.log('<pre>');
        console.log('A carta virada é ' + this.manilha['valor'] + ' de ' + this.manilha['naipe'] + '<br>');

        switch (this.manilha['valor']) {
            case 7:
                for (key in this.baralho) {
                    if (this.baralho[key]['valor'] == 11) {
                        this.baralho[key]['manilha'] = this.adicionarValorNaManilha(this.baralho[key]);
                    }
                }
                break;
            case 13:
                for (key in this.baralho) {
                    if (this.baralho[key]['valor'] == 100) {
                        this.baralho[key]['manilha'] = this.adicionarValorNaManilha(this.baralho[key]);
                    }
                }
                break;
            case 100:
                for (key in this.baralho) {
                    if (this.baralho[key]['valor'] == 200) {
                        this.baralho[key]['manilha'] = this.adicionarValorNaManilha(this.baralho[key]);
                    }
                }
                break;
            case 200:
                for (key in this.baralho) {
                    if (this.baralho[key]['valor'] == 300) {
                        this.baralho[key]['manilha'] = this.adicionarValorNaManilha(this.baralho[key]);
                    }
                }
                break;
            case 300:
                for (key in this.baralho) {
                    if (this.baralho[key]['valor'] == 4) {
                        this.baralho[key]['manilha'] = this.adicionarValorNaManilha(this.baralho[key]);
                    }
                }
                break;
            default:
                for (key in this.baralho) {
                    if (this.baralho[key]['valor'] == this.manilha['valor'] + 1) {
                        this.baralho[key]['manilha'] = this.adicionarValorNaManilha(this.baralho[key]);
                    }
                }
                break;
        }
        return this;
    }

    adicionarValorNaManilha(carta) {


        switch (carta['naipe']) {
            case '♣':
                carta['valor'] += 4000;
                return carta['valor'];
                break;
            case '♥':
                carta['valor'] += 3000;
                return carta['valor'];
                break;
            case '♠':
                carta['valor'] += 2000;
                return carta['valor'];
                break;
            case '♦':
                carta['valor'] += 1000;
                return carta['valor'];
                break;
        }
    }

    darCartas() {
        var i;
        for (i = 0; i < this.jogadores.length; i++) {
            this.jogadores[i]['cartas'].push(this.baralho.shift());
            this.jogadores[i]['cartas'].push(this.baralho.shift());
            this.jogadores[i]['cartas'].push(this.baralho.shift());
        }
        return this;
    }

    jogarCarta(jogador, carta) {

        this.rodadaAtual.push([
            'carta' > this.jogadores[jogador]['cartas'][carta],
            'jogador' > this.jogadores[jogador]['nome'],
            'jogadorkey' > this.jogadores[jogador]['key']
        ]);

        if (this.jogadores[jogador]['cartas'][carta]['manilha']) {
            if (this.jogadores[jogador]['cartas'][carta]['naipe'] == '♣') {
                console.log('O jogador: ' + this.jogadores[jogador]['nome'] + ' jogou a carta xablau ' + this.jogadores[jogador]['cartas'][carta]['naipe'] + '<br>');
            } else {
                console.log('O jogador: ' + this.jogadores[jogador]['nome'] + ' jogou a carta: ' + this.jogadores[jogador]['cartas'][carta]['valor'] + ' de ' + this.jogadores[jogador]['cartas'][carta]['naipe'] + ' manilha<br>');
            }
        } else {
            console.log('O jogador: ' + this.jogadores[jogador]['nome'] + ' jogou a carta: ' + this.jogadores[jogador]['cartas'][carta]['valor'] + ' de ' + this.jogadores[jogador]['cartas'][carta]['naipe'] + ' <br>');
        }

        delete this.jogadores[jogador]['cartas'][carta];
        console.log('delete ',this.jogadores[jogador]['cartas'][carta])
        this.verificarGanhadorRodadaAtual();

        return this;
    }

    verificarGanhadorRodadaAtual() {

        var cartaMaior, key, empate, rodada, phpjslocvar_0;

        if (this.rodadaAtual.length == 4) {
            cartaMaior = { 'carta': { 'naipe': 'none', 'valor': 0 } };

            for (key in this.rodadaAtual) {
                if (!empty(this.rodadaAtual[key]['carta']['manilha'])) {
                    if (!empty(cartaMaior['carta']['manilha'])) {
                        if (this.rodadaAtual[key]['carta']['manilha'] > cartaMaior['carta']['manilha']) {
                            cartaMaior = this.rodadaAtual[key];
                        }
                    } else {
                        if (this.rodadaAtual[key]['carta']['manilha'] > cartaMaior['carta']['valor']) {
                            cartaMaior = this.rodadaAtual[key];
                        }
                    }
                } else {
                    if (!empty(cartaMaior['carta']['manilha'])) {
                        if (this.rodadaAtual[key]['carta']['valor'] > cartaMaior['carta']['manilha']) {
                            cartaMaior = this.rodadaAtual[key];
                        }
                    } else {
                        if (this.rodadaAtual[key]['carta']['valor'] > cartaMaior['carta']['valor']) {
                            cartaMaior = this.rodadaAtual[key];
                        }
                    }
                }
            }

            empate = 0;
            for (phpjslocvar_0 in this.rodadaAtual) {
                rodada = this.rodadaAtual[phpjslocvar_0];
                if (empty(cartaMaior['carta']['manilha'])) {
                    if (cartaMaior['carta']['valor'] == rodada['carta']['valor']) {
                        empate++;
                    }
                }
            }

            if (empate > 1) {
                console.log('A jogada empatou');
                this.rodadasAnteriores.push(this.rodadaAtual);
                return this;
            } else if (empate < 2) {
                this.jogadores[cartaMaior['jogadorkey']]['pontos']++;
                this.rodadasAnteriores.push(this.rodadaAtual);
            }

            console.log("O " + cartaMaior['jogador'] + " ganhou <br>");

            return this;
        }
    }
}


