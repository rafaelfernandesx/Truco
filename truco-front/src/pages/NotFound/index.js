import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {

  return (
    <div>
      Pagina Não Encontrada
      <Link to="/">Home</Link>
    </div>
  );

}

export default NotFound;