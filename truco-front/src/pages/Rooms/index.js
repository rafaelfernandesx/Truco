import React, { useEffect, useState } from 'react';

import Truco from '../../Truco';

import { Row, Col, Panel, Input2, BtnAct, PageContainer, Container, Table, Tbody, Tr, Th, Td } from '../../components/MainComponents';
import { Link, useHistory } from 'react-router-dom';

function Rooms() {
  const history = useHistory();
  const [sala, setSala] = useState({nome:'123', descricao:'456', senha: '789'});
  const [salas, setSalas] = useState([]);
  const [clients, setClients] = useState([]);

  function criarSala() {
    Truco.criarSala(sala);
  }

  function renderSalas() {
    setSalas(
      Truco.salas.map((item, index) => {
        return (
          <Tr key={index}>
            <Td>{item.dono}</Td>
            <Td>{item.nome}</Td>
            <Td>{item.descricao}</Td>
            <Td>{item.status}</Td>
            <Td><Input2 width="50%" /></Td>
            <Td>{item.qtd}/4</Td>
            <Td>
              <BtnAct>Entrar</BtnAct>
            </Td>
          </Tr>
        );
      })
    )
  }

  function renderClients() {
    setClients(
      Truco.clients.map((item, index) => {
        return (
          <Tr key={index}>
            <Td>{item.nickname}</Td>
            <Td>{item.lastSync}</Td>
            <Td>{item.connectedAt}</Td>
            <Td>
              <BtnAct>Entrar</BtnAct>
            </Td>
          </Tr>
        );
      })
    )
  }

  useEffect(()=>{
    if (Truco.connected !== true) {
      history.replace('/logout');
    }
    Truco.renderSalas = renderSalas;
    Truco.renderClients = renderClients;
    Truco.listarSalas();
    Truco.listarClients();
    console.log('effect');
  }, [])

  return (
    <PageContainer>
      <Container>
        <Panel padding="7px">
          <Row>
            <Col flex="1" justifyContent="center">
              <h4>{Truco.nickname}</h4>
            </Col>
            <Col flex="10" justifyContent="center">
              <h2>HOME</h2>
            </Col>
            <Col flex="1" justifyContent="center">
              <Link to="/logout">Sair</Link>
            </Col>
          </Row>
        </Panel>


        <Panel padding="7px" mt="16px">
          <Col flex="10" justifyContent="center">
            <h3>Salas</h3>
          </Col>
        </Panel>

        <Panel padding="7px" mt="14px">
          <Table>
            <Tr>
              <Td><Input2 value={sala.nome} onChange={(e) => setSala({ ...sala, nome: e.target.value })} autoComplete="off" placeholder="Nome" type="text" width="100%" /></Td>
              <Td><Input2 value={sala.descricao} onChange={(e) => setSala({ ...sala, descricao: e.target.value })} autoComplete="off" placeholder="Descrição..." type="text" width="100%" /></Td>
              <Td><Input2 value={sala.senha} onChange={(e) => setSala({ ...sala, senha: e.target.value })} placeholder="Senha" type="password" width="100%" /></Td>
              <Td>
                <BtnAct onClick={criarSala}>Criar Sala</BtnAct>
                <BtnAct onClick={() => console.log(Truco.salas)}>ls Sala</BtnAct>
                <BtnAct onClick={() => console.log(Truco.clients)}>ls Client</BtnAct>
              </Td>
            </Tr>
            <Tr>
              <Th>Dono</Th>
              <Th>Nome</Th>
              <Th>Descrição</Th>
              <Th>Status</Th>
              <Th>Senha</Th>
              <Th>Jogadores</Th>
              <Th>Options</Th>
            </Tr>
            <Tbody>
              {
                salas
              }
            </Tbody>
          </Table>
        </Panel>



        <Panel padding="7px" mt="16px">
          <Col flex="10" justifyContent="center">
            <h3>Clients</h3>
          </Col>
        </Panel>

        <Panel padding="7px" mt="14px">
          <Row>
            <Col justifyContent="center">
              <Table>
                <Tr>
                  <Th>Nickname</Th>
                  <Th>Status</Th>
                  <Th>Descrição</Th>
                  <Th>Options</Th>
                </Tr>
                <Tbody>
                  {
                    clients
                  }
                </Tbody>
              </Table>
            </Col>
          </Row>
        </Panel>
      </Container>
    </PageContainer>
  );

}


export default Rooms;
