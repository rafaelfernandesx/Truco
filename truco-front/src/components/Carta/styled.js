import styled from 'styled-components';

export const Image = styled.img`
  ${(props) => props.padding ? 'padding: ' + props.padding : ''};
  transform: rotate(${(props) => props.rotate || ''});
  margin: ${(props) => props.margin || ''};
  height: ${(props) => props.height || 'auto'};
`;