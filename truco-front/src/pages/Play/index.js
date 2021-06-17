import React from 'react';

import {
  Row, Col, Panel, PageContainer
} from '../../components/MainComponents';
import Carta from '../../components/Carta';

import Truco from '../../Truco';

function Play() {

  return (
    <PageContainer flexDirection="column">
      <Row padding="8px">
        <Panel>
          <Col justifyContent="center">
            <div>rodada: ⬮⬯</div>
          </Col>
          <Col justifyContent="center">
            Status: Aguardando jogadores
          </Col>
          <Col justifyContent="center">
            {Truco.nickname}
          </Col>
        </Panel>
      </Row>

      <Row flexDirection="row" height="100%">
        <Col flex="1" padding="8px">
          <Panel flexDirection="column">
            <Carta v/>
            <Carta v/>
            <Carta v/>
          </Panel>
        </Col>
        <Col flex="3">
          <Row height="100%" flexDirection="column">
            <Col flex="1" padding="8px">
              <Panel>
                <Carta />
                <Carta />
                <Carta />
              </Panel>
            </Col>
            <Col flex="3" padding="8px">
              <Panel>
                Center
              </Panel>
            </Col>
            <Col flex="1" padding="8px">
              <Panel>
                <Carta />
                <Carta />
                <Carta />
              </Panel>
            </Col>
          </Row>
        </Col>
        <Col flex="1">
          <Panel flexDirection="column">
            <Carta carta={1}/>
            <Carta carta={52}/>
            <Carta carta={52}/>
          </Panel>
        </Col>
      </Row>

    </PageContainer>
  );

}


export default Play;
