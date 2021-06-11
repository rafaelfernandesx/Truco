import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";

import Truco from '../../Truco';
import loading from '../../assets/images/loading.svg';

function Preload() {
    const dispatch = useDispatch();
    const history = useHistory();

    const checkLogged = () => {
        console.log('connected' ,Truco.connected);

        if (Truco.connected === true) {
            history.replace('/');
        } else {
            setLogged(false);
            history.replace('/login');
        }
    }

    useEffect(() => {
        checkLogged();
    }, []);


    return (
        <div style={bgStyle}>
            <img src={loading} height="60%" alt="Loading..."/>
        </div >
    );

    function setLogged(logged) {
        dispatch({ type: 'SET_LOGGED', payload: { logged } })
    }
}

const bgStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    height: '100vh',
    backgroundColor: '#222'
};

export default Preload;

