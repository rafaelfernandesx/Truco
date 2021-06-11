import React from 'react';
import styled from 'styled-components';

import {Row} from '../MainComponents';


export function Tab(props) {
    return (
        <Row flexDirection="column">
            {props.children}
        </Row>
    );
}

export function TabButtons(props) {

    return (
        <Row>{props.children}</Row>
    );
}

export const TabItem = styled.button`
  width: 140px;
  background-color: ${props => (props.active ? "#222" : "transparent")};
  font-weight: bold;
  color: ${props => (props.active ? "#FFF" : "#222")};
  padding: 8px;
  border: none;
  box-sizing: border-box;
  &:hover {
    background-color: #222;
    color: #fff;
  }
`;
