class Truco {
    static nickname = null;
    static host = 'ws://localhost:1234';
    static ws = null;
    static callBackError = null;
    static callBackConnect = null;
    static salas = [];
    static clients = [];

    static connected = false;

    static connect() {

        if (Truco.ws === null) {

            Truco.ws = new WebSocket(Truco.host);

            Truco.ws.onopen = function(evt) {
                console.log('ws iniciado', evt.data)
                Truco.connected = true;

                if (Truco.callBackConnect !== null) {
                    Truco.callBackConnect();
                }
            }

            Truco.ws.onclose = function (evt) {
                Truco.connected = false;
                console.log('Client notified socket has closed', evt);
            }

            Truco.ws.onerror = function(evt) {
                Truco.connected = false;
                console.log('ws error', evt.data)
                if (Truco.callBackError !== null) {
                    Truco.callBackError(evt.data);
                }
            }

            Truco.ws.onmessage = function(evt) {
                const data = JSON.parse(evt.data);
                console.log('onmessage', data);
                switch (data.type) {
                    case 'novaSala':
                        Truco.salas.push(data.data);
                        Truco.renderSalas();
                        break;
                    case 'atualizarSala':
                        Truco.salas.push(data.data);
                        Truco.renderSalas();
                        break;
                    case 'listaSalas':
                        console.log('ls sala', Truco.salas);
                        Truco.salas = data.data;
                        Truco.renderSalas();
                        break;
                    case 'listaClients':
                        console.log('ls clients data', data);
                        Truco.clients = data.data;
                        console.log('ls clients', Truco.clients);
                        Truco.renderClients();
                        break;
                    default:
                        break;
                }
            }

        }
    }

    static bindCientName(nickname) {
        const data = {
            'type': 'bindClientName',
            'data': {
                'nickname': nickname,
                'clientID': sessionStorage.clientID
            }
        }
        Truco.ws.send(JSON.stringify(data));
    }


    static entrarEmSala(keySala, senha) {
        const data = {
            'type': 'entrarEmSala',
            'data': {
                'keySala': keySala,
                'senha': senha
            }
        }

        Truco.ws.send(JSON.stringify(data));
    }

    static criarSala(sala) {
        const data = {
            'type': 'criarSala',
            'data': {
                'dono': Truco.nickname,
                'nome': sala.nome,
                'descricao': sala.descricao,
                'senha': sala.senha
            }
        }

        Truco.ws.send(JSON.stringify(data));
    }

    static jogarCarta(carta) {
        Truco.ws.send(carta);
    }

    static listarClients() {
        const data = {
            'type': 'listarClients'
        };
        Truco.ws.send(JSON.stringify(data));
    }

    static listarSalas() {
        const data = {
            'type': 'listarSalas'
        };
        Truco.ws.send(JSON.stringify(data));
    }

}

export default Truco;