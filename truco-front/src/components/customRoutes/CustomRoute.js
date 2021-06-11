import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Truco from '../../Truco';

function CustomRoute(props) {

    if (Truco.connected === true) {

        if (props.path === '/login') {
            return <Redirect to="/" />;
        }

        return <Route {...props} />;
    }else{
        if (props.path !== '/login') {
            return <Redirect to="/login" />;
        }

        return <Route {...props} />;
    }
}

export default CustomRoute;