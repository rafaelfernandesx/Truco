import React from 'react';

// import cartas from '../../assets/cartas';
// import {Image} from './styled';
// function Carta(props) {
//   console.log(props)
//   const Comp = cartas[0];
//   return (
//     <Image height="100px" margin="5px" rotate={props.v ? '90deg': ''} src={cartas[props.carta || Math.floor(Math.random() * 51)]} />
//   );

// }
import {E4} from './cartas';

function Carta(props) {
  return <E4 rotate={props.v ? '90' : ''}/>;
}

export default Carta;