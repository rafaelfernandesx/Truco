import React from 'react';

import {
  Row, Col, Panel, PageContainer
} from '../../components/MainComponents';
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

      <Row flexDirection="column" height="100%">
        <Col flex="1">
          <Row>
            <Col flex="1" padding="8px"></Col>
            <Col flex="3" padding="8px">
              <Panel>
                Play
              </Panel>
            </Col>
            <Col flex="1" padding="8px"></Col>
          </Row>
        </Col>
        <Col flex="3">
          <Row height="100%">
            <Col flex="1" padding="8px">
              <Panel>
                Play
              </Panel>
            </Col>
            <Col flex="3" padding="8px">
              <Panel>
                Play
              </Panel>
            </Col>
            <Col flex="1" padding="8px">
              <Panel>
                Play
              </Panel>
            </Col>
          </Row>
        </Col>
        <Col flex="1">
          <Row>
            <Col flex="1" padding="8px"></Col>
            <Col flex="3" padding="8px">
              <Panel>
                Play
              </Panel>
            </Col>
            <Col flex="1" padding="8px"></Col>
          </Row>
        </Col>
      </Row>

    </PageContainer>
  );

}


export default Play;
