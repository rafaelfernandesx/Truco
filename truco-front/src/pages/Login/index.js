import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import Truco from '../../Truco';

import { useSelector, useDispatch } from 'react-redux';
import { Input1, Button1, PageContainer } from '../../components/MainComponents';
import { LoginPlace, FormLogin } from './styled';

function Login() {
  const dispatch = useDispatch();
  const history = useHistory();

  const [error, setError] = useState('');

  const nickname = useSelector(state => state.userReducer.nickname);

  function onSubmit(event) {
    event.preventDefault();

    Truco.callBackError = (msg) => {
      setError(msg);
    };

    Truco.callBackConnect = (msg) => {
      setLogged(true);
      Truco.bindCientName(nickname);
      Truco.nickname = nickname;
      history.replace('/preload');
    };

    Truco.connect();

  }


  return (
    <PageContainer>
      <LoginPlace>
        <FormLogin onSubmit={onSubmit}>

          <Input1 placeholder="Nickname"
            onChange={(e) => setNickname(e.target.value)}
            value={nickname}
            name="nickname"
            className="mb-7"
            style={{marginBottom: '7px'}}/>

          {error && (
            <div>{error}</div>
          )}

          <Button1 type="submit">Entrar</Button1>

        </FormLogin>
      </LoginPlace>
    </PageContainer>
  );

  function setNickname(nickname){
    dispatch({ type: 'SET_NICKNAME', payload: { nickname } });
  }
  function setLogged(logged){
    dispatch({ type: 'SET_LOGGED', payload: { logged } });
  }

}

export default Login;