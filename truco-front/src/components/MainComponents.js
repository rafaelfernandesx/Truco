import styled from 'styled-components';
import base from './systemBase';

console.log('SystemBase', base);
export const PageContainer = styled.div`
  display: flex;
  flex-direction: ${(props) => props.flexDirection || 'row'};
  width: 100vw;
  height: 100vh;
  background-color: #FFF;
`;

export const ContainerPage = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  flex: 1;
  padding: 14px;
  overflow-y: auto;
  background-color: ${(props) => props.bg || '#F9F9F9'};
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  flex: 1;
  padding: ${(props) => props.padding || '16px'};
  overflow-y: auto;
  background-color: ${(props) => props.bg || '#F1F1F1'};
`;

export const Input1 = styled.input`
  width: 100%;
  height: auto;
  font-size: 14px;
  padding: 4px;
  background-color: #FFF;
  border: none;
  border-bottom: 1px solid #222;
`;

export const Label2 = styled.label`
  color: #000;
  font-size: 16px;
  font-weight: bold;
`;

export const Input2 = styled.input`
  width: ${(props) => props.width || '100%'};
  height: auto;
  font-size: 14px;
  padding: 4px;
  background-color: #FFF;
  border-radius: 4px;
  border: 1px solid #aaa;
  &:focus{
    box-shadow: 0px 0px 3px #555;
  }
`;

export const Select2 = styled.select`
  width: 100%;
  height: auto;
  font-size: 14px;
  padding: 4px;
  background-color: #FFF;
  border-radius: 4px;
  border: 1px solid #aaa;
  &:focus{
    box-shadow: 0px 0px 3px #555;
  }
`;

export const Button1 = styled.button`
  width: 100%;
  font-size: 14px;
  padding: 4px;
  background-color: #17a299;
  font-weight: bold;
  color: #FFF;
  border: none;
  &:hover {
    background-color: #17a2aa;
  }
  &:active {
    background-color: #17a2FF;
  }
`;

export const BtnAction = styled.button`
  justify-content: center;
  align-items: center;
  height: 25px;
  padding: 2px;
  margin-right: 2px;

  background-color: #665;
  font-size: 14px;
  color: #FFF;
  border: none;
  &:hover {
    background-color: #333;
  }
  &:active {
    background-color: #000;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  ${(props) => props.padding ? 'padding: ' + props.padding : ''};
  margin          : ${(props) => props.margin || '0px'};
  height          : ${(props) => props.height || 'auto'};
  flex-direction  : ${(props) => props.flexDirection || 'row'};
  color           : ${(props) => props.color || '#000'};
  background-color: ${(props) => props.bg || 'transparent'};
  justify-content : ${(props) => props.justifyContent || ''};
  align-items     : ${(props) => props.alignItems || ''};
`;

export const Col = styled.div`
  display: flex;
  margin          : ${(props) => props.margin || ''};
  width           : ${(props) => props.width || '100%'};
  flex            : ${(props) => props.flex || '1'};
  ${(props) => props.padding ? 'padding: ' + props.padding : ''};
  flex-direction  : ${(props) => props.flexDirection || 'row'};
  color           : ${(props) => props.color || '#000'};
  background-color: ${(props) => props.bg || ''};
  justify-content : ${(props) => props.justifyContent || ''};
  align-items     : ${(props) => props.alignItems || ''};
`;

// ########################## Table Start
export const Table = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  color: #222;
`;

export const Thead = styled.div`
  display: flex;
  flex-direction: row;
  background-color: transparent;
  & > div{
    font-weight: bold;
  }
`;

export const Tbody = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Tfoot = styled.div`
  background: #222;
`;

export const Tr = styled.div`
  display: flex;
  border-radius: 12px;
  border: 1px solid #e6e7f1;
  flex-direction: row;
  margin-bottom: 7px;
  ${(props) => props.bg ? 'background: ' + props.bg : ''};
  ${(props) => props.color ? 'color: ' + props.color : ''};

  ${Tbody} > &:hover {
    background: #1ec41045;
  }
  & > div {
    cursor: default;
  }
`;

export const Th = styled.div`
  flex:1;
  padding: 7px;
  font-size: 14px;
  word-wrap: anywhere;
  font-weight: bold;
  text-align: ${(props) => props.ta || 'center'};
`;

export const Td = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  padding: 7px;
  font-size: 14px;
  word-wrap: anywhere;
  text-align: ${(props) => props.ta || 'center'};
`;
// ########################## Table End


export const BtnAdd = styled.button`
  width: 30px;
  height: 30px;
  font-size: 14px;
  padding: 4px;
  background-color: #5A5;
  font-weight: bold;
  color: #FFF;
  border: none;
  &:hover {
    background-color: #5B5;
  }
  &:active {
    background-color: #5D5;
  }
`;

export const BtnReload = styled.button`
  width: 30px;
  height: 30px;
  font-size: 14px;
  padding: 4px;
  background-color: #444;
  font-weight: bold;
  color: #FFF;
  border: none;
  &:hover {
    background-color: #666;
  }
  &:active {
    background-color: #888;
  }
`;




























export const Panel = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  padding: ${(props) => props.padding || '24px'};
  ${(props) => props.margin ? 'margin: '+props.margin : ''};
  ${(props) => props.mt ? 'margin-top: '+props.mt : ''};
  ${(props) => props.mr ? 'margin-right: '+props.mr : ''};
  ${(props) => props.mb ? 'margin-bottom: '+props.mb : ''};
  ${(props) => props.ml ? 'margin-left: '+props.ml : ''};
  border-radius: 12px;
  height: auto;
  flex-direction: ${(props) => props.flexDirection || 'row'};
  color: #000;
  background-color: #FFF;
  justify-content : ${(props) => props.justifyContent || 'flex-start'};
  align-items     : ${(props) => props.alignItems || 'center'};
  box-shadow: 0 2.88px 4.8px rgba(166,166,185,.5),0 5.21px 48px rgba(122,123,151,.3) !important;
`;


export const BtnPanel = styled.button`
  display: flex;
  height: ${(props) => props.height || 'auto'};
  width: ${(props) => props.width || 'auto'};
  padding: ${(props) => props.padding || '7px'};
  ${(props) => props.margin ? 'margin: ' + props.margin : ''};
  ${(props) => props.mt ? 'margin-top: '+props.mt : ''};
  ${(props) => props.mr ? 'margin-right: '+props.mr : ''};
  ${(props) => props.mb ? 'margin-bottom: '+props.mb : ''};
  ${(props) => props.ml ? 'margin-left: '+props.ml : ''};
  border-radius: 4.64px;
  color: #044200;
  background-color: #b5e4b4;
  justify-content: flex-start;
  align-items: center;
  border: none;

  cursor: pointer;
  &:hover {
    filter: brightness(96%);
  }
  &:active {
    filter: brightness(92%);
  }
`;

export const BtnAct = styled.button`
  display: flex;
  height: ${(props) => props.size || '30px'};
  width: auto;
  padding: ${(props) => props.padding || '7px'};
  ${(props) => props.margin ? 'margin: ' + props.margin : ''};
  ${(props) => props.mt ? 'margin-top: '+props.mt : ''};
  ${(props) => props.mr ? 'margin-right: '+props.mr : ''};
  ${(props) => props.mb ? 'margin-bottom: '+props.mb : ''};
  ${(props) => props.ml ? 'margin-left: '+props.ml : ''};
  border-radius: 4.64px;
  color: #044200;
  background-color: #b5e4b4;
  justify-content: flex-start;
  align-items: center;
  border: none;

  cursor: pointer;
  &:hover {
    filter: brightness(96%);
  }
  &:active {
    filter: brightness(92%);
  }
`;

export const SelectWrapper = styled.div`
  position: relative;
  min-width: 180px;
  background-color: #FFF;
  border-radius: 5px;
  border: 1px solid #10c488;
  &::after {
    position: absolute;
    width: 10px;
    height: 10px;
    top: 7px;
    right: 7px;
    border-style: solid;
    border-color: #10c488;
    border-width: 0px 1px 1px 0px;
    transform: rotate(45deg);
    content:'';
  }
`;
export const SelectPanel = styled.select`
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  width:100%;
  color: #005500;
  font-size: 15px;
  padding: 5px;
  padding-right: 20px;
  background: transparent;
  border: none;
`;