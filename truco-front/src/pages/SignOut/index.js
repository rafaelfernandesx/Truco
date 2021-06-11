import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';

import {PageContainer} from '../../components/MainComponents';
import { useDispatch } from 'react-redux';
function SignOut() {
  const dispatch = useDispatch();

  const [msg, setMsg] = useState('Deslogando...');



  useEffect(() =>{
    setLogged(false);
    setMsg('Deslogado!');
  }, []);

  return (
    <PageContainer>
      <div>
        {msg}<br />
        <Link to="/login">Entrar</Link>
      </div>
    </PageContainer>
  );

  function setLogged(logged) {
    dispatch({ type: 'SET_LOGGED', payload: { logged } });
  }
}


export default SignOut;
